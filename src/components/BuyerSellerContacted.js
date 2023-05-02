// One single buyer and seller on the ContactedList
export function BuyerSellerContacted(props) {
  return (
    <section>
      <p>Name: {props.contactedBuyer.name}</p>
      <p>Email: {props.contactedBuyer.email}</p>
      <p>Phone: {props.contactedBuyer.phone}</p>
    </section>
  );
}
