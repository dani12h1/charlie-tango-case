import { BuyerSeller } from "./BuyerSeller";

// List of buyers / sellers not contacted
export function DashboardList(props) {
  return (
    <>
      <h2 className="dashboardHeader">Open tickets</h2>
      <ul className="buyerContainer">
        {/* Receives the props.artcles from the App component */}
        {props.dashboardBuyers.map((buyerSeller) => (
          // Sends down the props.buyProduct received from the App
          <BuyerSeller
            handleContacted={props.handleContacted}
            sellerContacted={props.sellerContacted}
            contacted={props.dashboardBuyers}
            key={buyerSeller.id}
            buyerSeller={{ ...buyerSeller }}
          />
        ))}
      </ul>
    </>
  );
}
