import { DistpatchContext } from "@/contexts/buyerContext";
import { useContext } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Buyer(props) {
  const dispatch = useContext(DistpatchContext);

  // The action object that is added to buyerList
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

  // Checks the estate type
  function getEstateType(id) {
    const estateType = estateTypes.find((type) => type.id === id);
    return estateType ? estateType.name : "Unknown";
  }

  // Card for the buyer
  return (
    <article className="buyerCard" key={props.id}>
      <p>Buyer ID: #{props.id}</p>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
      <p>Takeover date: {props.takeoverDate}</p>
      <p>Estate Type: {getEstateType(props.estateType)}</p>
      <p>
        Household: {props.adults}/{props.children}
      </p>
      <input type="checkbox" onClick={addToList} />
    </article>
  );
}
