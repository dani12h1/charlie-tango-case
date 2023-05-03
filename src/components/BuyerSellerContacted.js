// One single buyer and seller on the ContactedList
export function BuyerSellerContacted(props) {
  return (
    <article>
      <h3>Name:</h3>
      <p>{props.contacted.name}</p>
      <h3>Email:</h3>
      <p>{props.contacted.email}</p>
      <h3>Phone:</h3>
      <p>{props.contacted.phone}</p>
      <h3>Contacted:</h3>
      <p>{props.contacted.contacted ? "Yes" : "No"}</p>
    </article>
  );
}
