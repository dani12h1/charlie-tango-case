// A single item on the DashboardList
export function BuyerSeller(props) {
  const createdAt = new Date(props.buyerSeller.created_at);
  const formattedDate = `${createdAt.getDate()}-${
    createdAt.getMonth() + 1
  }-${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

  return (
    <section>
      <p>ID: {props.buyerSeller.id}</p>
      <p>Name: {props.buyerSeller.name}</p>
      <p>Email: {props.buyerSeller.email}</p>
      <p>Phone: {props.buyerSeller.phone}</p>
      <p>Created at: {formattedDate}</p>
      <p>Contacted: {`${props.buyerSeller.contacted}`}</p>
      <p>Consent: {`${props.buyerSeller.checkbox}`}</p>
      <p>Size: {props.buyerSeller.minSize} kvdm</p>
      <button onClick={() => props.handleContacted(props.buyerSeller)}>
        Contacted
      </button>
    </section>
  );
}
