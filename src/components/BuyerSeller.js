import styles from "../pages/Home.module.css";

// A single item on the DashboardList
export function BuyerSeller(props) {
  const createdAt = new Date(props.buyerSeller.created_at);
  const formattedDate = `${createdAt.getDate()}-${
    createdAt.getMonth() + 1
  }-${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes()}`;

  return (
    <article>
      <h3>ID:</h3>
      <p>{props.buyerSeller.id}</p>
      <h3>Name:</h3>
      <p>{props.buyerSeller.name}</p>
      <h3>Email:</h3>
      <p>{props.buyerSeller.email}</p>
      <h3>Phone:</h3>
      <p>{props.buyerSeller.phone}</p>
      <h3>Created at:</h3>
      <p>{formattedDate}</p>
      <h3>Contacted:</h3>
      <p>{`${props.buyerSeller.sellerContacted ? "Yes" : "No"}`}</p>
      <h3>Consent:</h3>
      <p>{`${props.buyerSeller.checkbox ? "Yes" : "No"}`}</p>
      <h3>Size:</h3>
      <p>{props.buyerSeller.minSize} kvdm</p>
      <button
        className={styles.button}
        id="dashBtn"
        onClick={() => props.handleContacted(props.buyerSeller)}
      >
        Close ticket
      </button>
    </article>
  );
}
