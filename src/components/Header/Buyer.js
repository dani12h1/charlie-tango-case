export default function Buyer(props) {
  const buyer = { ...props, checked: false };
  console.log("before:", buyer);
  const potentialBuyersList = [];

  return (
    <article key={props.id}>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
      <button onClick={clickedBuyer}>Add buyer</button>
    </article>
  );

  function clickedBuyer() {
    return (
      (buyer.checked = !buyer.checked),
      console.log("after:", buyer),
      buyer.checked != false
        ? potentialBuyersList.push(buyer)
        : potentialBuyersList.pop(buyer),
      console.log(potentialBuyersList)
    );
  }
}
