import { BuyerSellerContacted } from "./BuyerSellerContacted";

// List of the contacted buyers and sellers
export function ContactedList(props) {
  return (
    <>
      <h2>Closed tickets</h2>
      <ul className="ContactedList">
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
    </>
  );
}
