import { BuyerSellerContacted } from "./BuyerSellerContacted";

// List of the contacted buyers and sellers
export function ContactedList(props) {
  return (
    <>
      <h2>Closed tickets</h2>
      <div className="ContactedList">
        {props.dashboardBuyers.map((contacted) => (
          <BuyerSellerContacted
            key={contacted.id}
            contacted={{ ...contacted }}
          />
        ))}
      </div>
    </>
  );
}
