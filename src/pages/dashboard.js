import { useEffect, useState } from "react";
import styles from "./Home.module.css";

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

// List of buyers / sellers not contacted
function DashboardList(props) {
  return (
    <ul className="buyerContainer">
      <h2>Open cases</h2>

      {/* Receives the props.artcles from the App component */}
      {props.dashboardBuyers.map((buyerSeller) => (
        // Sends down the props.buyProduct received from the App
        <BuyerSeller
          sellerContacted={props.sellerContacted}
          contacted={props.dashboardBuyers}
          key={buyerSeller.id}
          buyerSeller={{ ...buyerSeller }}
        />
      ))}
    </ul>
  );
}

// A single item on the DashboardList
function BuyerSeller(props) {
  const createdAt = new Date(props.buyerSeller.created_at);
  const formattedDate = `${createdAt.getDate()}-${
    createdAt.getMonth() + 1
  }-${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

  return (
    <section>
      <p>Name: {props.buyerSeller.name}</p>
      <p>Email: {props.buyerSeller.email}</p>
      <p>Phone: {props.buyerSeller.phone}</p>
      <p>Created at: {formattedDate}</p>
      <button onClick={() => props.sellerContacted(props.buyerSeller)}>
        Contacted
      </button>
    </section>
  );
}

// List of the contacted buyers and sellers
function ContactedList(props) {
  return (
    <ul className="ContactedList">
      <h2>Contacted</h2>

      {/* Receives the props.artcles from the App component */}
      {props.contacted.map((contactedBuyer) => (
        // Sends down the props.buyProduct received from the App
        <BuyerSellerContacted
          sellerContacted={props.sellerContacted}
          contacted={props.dashboardBuyers}
          key={contactedBuyer.id}
          contactedBuyer={{ ...contactedBuyer }}
        />
      ))}
    </ul>
  );
}

// One single buyer and seller on the ContactedList
function BuyerSellerContacted(props) {
  return (
    <section>
      <p>Name: {props.contactedBuyer.name}</p>
      <p>Email: {props.contactedBuyer.email}</p>
      <p>Phone: {props.contactedBuyer.phone}</p>
    </section>
  );
}
