import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Dashboard() {
  const [dashboardBuyers, setDashboardBuyers] = useState([]);

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
    console.log("DashboardList length:", dashboardBuyers.length);
    console.log("ContactedList length:", contacted.length);
  }

  return (
    <>
      <div className="dashboard_wrapper">
        {/* <h1 className={styles.headline}>Dashboard</h1> */}

        <DashboardList
          length={dashboardBuyers.length}
          sellerContacted={sellerContacted}
          className="DashboardList"
          dashboardBuyers={dashboardBuyers}
        />
        <ContactedList
          length={contacted.length}
          contacted={contacted}
          className="ContactedList"
        />
      </div>
    </>
  );
}

// List of buyers / sellers not contacted
function DashboardList(props) {
  return (
    <ul className="buyerContainer">
      <h2>Open cases</h2>
      <p>{props.dashboardBuyers.length}</p>
      {/* Receives the props.artcles from the App component */}
      {props.dashboardBuyers.map((buyerSeller) => (
        // Sends down the props.buyProduct received from the App
        <BuyerSeller
          sellerContacted={props.sellerContacted}
          contacted={props.dashboardBuyers}
          key={props.id}
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
    <ul>
      <h2>Contacted</h2>
      <p>{props.contacted.length}</p>
      {/* Receives the props.artcles from the App component */}
      {props.contacted.map((contactedBuyer) => (
        // Sends down the props.buyProduct received from the App
        <BuyerSellerContacted
          sellerContacted={props.sellerContacted}
          contacted={props.dashboardBuyers}
          key={props.id}
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
