// One single buyer and seller on the ContactedList
export function BuyerSellerContacted(props) {
  return (
    <article>
      <p>Name: {props.contacted.name}</p>
      <p>Email: {props.contacted.email}</p>
      <p>Phone: {props.contacted.phone}</p>
      <p>Contacted: {props.contacted.contacted ? "Yes" : "No"}</p>
    </article>
  );
}
