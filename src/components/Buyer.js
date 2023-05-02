import { DistpatchContext } from "@/contexts/buyerContext";
import { useContext, useState } from "react";
import { estateTypes } from "@/data/estateTypes";
import styles from "../pages/buyers/Buyers.module.css";
import { priceFormatter } from "@/data/buyerProfiles";

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
      {isChecked ? (
        <input
          type="radio"
          className={styles.radioBtn}
          checked={isChecked}
          onChange={() => setIsChecked(isChecked)}
        />
      ) : (
        <input className={styles.radioBtn} type="radio" checked={""} />
      )}
      <h3 className={styles.buyerCardh3}>Max price:</h3>
      <p className={styles.buyerCardPara}>
        {priceFormatter.format(props.maxPrice)}
      </p>
      <h3 className={styles.buyerCardh3}>Buyer min size:</h3>
      <p className={styles.buyerCardPara}>{props.minSize} m²</p>
      <h3 className={styles.buyerCardh3}>Buyer description:</h3>
      <p className={styles.buyerCardPara}>{props.description}</p>
      <h3 className={styles.buyerCardh3}>Takeover date:</h3>
      <p className={styles.buyerCardPara}>{props.takeoverDate}</p>
      <h3 className={styles.buyerCardh3}>Estate Type:</h3>
      <p className={styles.buyerCardPara}>{getEstateType(props.estateType)}</p>
      <h3 className={styles.buyerCardh3}>Household:</h3>
      <p className={styles.buyerCardPara}>
        adult(s) {props.adults} / child(ren) {props.children}
      </p>
    </article>
  );
}
