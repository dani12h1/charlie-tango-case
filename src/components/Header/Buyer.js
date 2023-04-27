import { DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";

export default function Buyer(props) {
  const dispatch = useContext(DistpatchContext);

  function addToList() {
    dispatch({
      action: "TOGGLE_BUYER",
      payload: {
        id: props.id,
        price: props.maxPrice,
        size: props.minSize,
      },
    });
  }

  return (
    <article key={props.id}>
      <p>{props.id}</p>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
      <button onClick={addToList}>Add buyer</button>
    </article>
  );
}
