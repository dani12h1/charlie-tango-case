import { BuyerSellerContacted } from "./BuyerSellerContacted";

// List of the contacted buyers and sellers
export function ContactedList(props) {
  return (
    <>
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
