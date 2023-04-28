import { DistpatchContext } from "@/contexts/buyerContext";
import { useContext, useState } from "react";
import { estateTypes } from "@/data/estateTypes";

export default function Buyer(props) {
  const dispatch = useContext(DistpatchContext);
  const [isChecked, setIsChecked] = useState(false);

  // The action object that is added to buyerList
  function addToList(e) {
    console.log(e.target);
    console.log("ATL");
    dispatch({
      action: "TOGGLE_BUYER",
      payload: {
        id: props.id,
        price: props.maxPrice,
        size: props.minSize,
        estateType: props.estateType,
      },
    });
    setIsChecked(!isChecked);
  }

  // Checks the estate type
  function getEstateType(id) {
    const estateType = estateTypes.find((type) => type.id === id);
    return estateType ? estateType.name : "Unknown";
  }

  // Card for the buyer
  return (
    <article
      onClick={addToList}
      className={`buyerCard ${isChecked ? "checked" : ""}`}
      key={props.id}
    >
      <p>Buyer ID: #{props.id}</p>
      <p>Max price: {props.maxPrice}</p>
      <p>Buyer min size: {props.minSize}</p>
      <p>Buyer description: {props.description}</p>
      <p>Takeover date: {props.takeoverDate}</p>

      <p>Estate Type: {getEstateType(props.estateType)}</p>
      <p>
        Household: {props.adults} / {props.children}
      </p>

      {isChecked ? (
        <input
          type="radio"
          checked={isChecked}
          onChange={() => setIsChecked(isChecked)}
        />
      ) : (
        <input type="radio" checked={""} />
      )}
    </article>
  );
}
