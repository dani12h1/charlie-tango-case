import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Buyer from "@/components/Header/Buyer";

export default function Dashboard({ data }) {
  const [dashboardBuyers, setDashboardBuyers] = useState([]);
  const [page, setPage] = useState(0);

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
  }, [page]);

  console.log(dashboardBuyers);

  return (
    <>
      <div className="wrapper">
        <h1 className={styles.headline}>Dashboard</h1>
        <section className="buyerContainer">
          <DashboardList dashboardBuyers={dashboardBuyers} />
        </section>
      </div>
    </>
  );
}

function DashboardList(props) {
  return (
    <ul className="buyerContainer">
      <h2>Open cases</h2>
      {/* Receives the props.artcles from the App component */}
      {props.dashboardBuyers.map((buyerSeller) => (
        // Sends down the props.buyProduct received from the App
        <BuyerSeller key={props.id} buyerSeller={{ ...buyerSeller }} />
      ))}
    </ul>
  );
}

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
      <button>Contacted</button>
    </section>
  );
}
