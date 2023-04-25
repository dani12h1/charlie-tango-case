export default function Buyer(props) {
  return (
    <article key={props.id}>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
    </article>
  );
}
