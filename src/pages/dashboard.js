import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { ContactedList } from "../components/ContactedList";
import { DashboardList } from "../components/DashboardList";

export default function Dashboard() {
  const [dashboardBuyers, setDashboardBuyers] = useState([]);
  const [activeList, setActiveList] = useState("dashboard");
  const [contacted, setContacted] = useState([]);

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
  }, []);

  function sellerContacted(contactedBuyer) {
    console.log(contactedBuyer);

    setContacted((oldContactedList) => [
      ...oldContactedList,
      { ...contactedBuyer },
    ]);
    setDashboardBuyers((oldDashboardBuyers) =>
      oldDashboardBuyers.filter(
        (buyerSeller) => buyerSeller.id !== contactedBuyer.id
      )
    );
  }

  function handleListButtonClick(listType) {
    setActiveList(listType);
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
            Closed {contacted.length}
          </button>
        </div>
        {/* Shows the list depending on wether or not "dashboard" is clicked */}
        {activeList === "dashboard" ? (
          <DashboardList
            sellerContacted={sellerContacted}
            className="DashboardList"
            dashboardBuyers={dashboardBuyers}
          />
        ) : (
          <ContactedList contacted={contacted} className="ContactedList" />
        )}
      </div>
    </>
  );
}
