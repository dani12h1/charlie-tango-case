import { useEffect, useState, useContext } from "react";
import styles from "./Home.module.css";
import { ContactedList } from "../components/ContactedList";
import { DashboardList } from "../components/DashboardList";
import { DashboardContext, DashboardSetContext } from "./_app";

export default function Dashboard() {
  const dashboardBuyers = useContext(DashboardContext);
  const setDashboardBuyers = useContext(DashboardSetContext);
  const [activeList, setActiveList] = useState("dashboard");

  useEffect(() => {
    fetch("/api/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data), setDashboardBuyers(data.response);
      });
  }, [setDashboardBuyers]);

  function handleListButtonClick(listType) {
    setActiveList(listType);
  }

  function handleContacted(buyerSeller) {
    buyerSeller.contacted
      ? (buyerSeller.contacted = false)
      : (buyerSeller.contacted = true);
    console.log(buyerSeller.contacted);

    patchContact({ contacted: buyerSeller.contacted, id: buyerSeller.id });
  }

  function patchContact(payload) {
    console.log(payload);
    const patchedContact = payload;

    console.log(`buyerSeller with id: ${payload.id}`);
    fetch("/api/patch_contact", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(patchedContact),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="dashboard_wrapper">
        <div className="dashboard_header">
          <h1 className={styles.headline}>Dashboard</h1>
        </div>

        <div className="dashboard_buttons">
          <button onClick={() => handleListButtonClick("dashboard")}>
            Open {dashboardBuyers.length}
          </button>
          <button onClick={() => handleListButtonClick("contacted")}>
            {/* Closed {contacted.length} */}
          </button>
        </div>
        {/* Shows the list depending on wether or not "dashboard" is clicked */}
        {activeList === "dashboard" ? (
          <DashboardList
            handleContacted={handleContacted}
            className="DashboardList"
            dashboardBuyers={dashboardBuyers}
          />
        ) : (
          <ContactedList className="ContactedList" />
        )}
      </div>
    </>
  );
}
