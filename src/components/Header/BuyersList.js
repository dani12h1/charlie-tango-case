import React from "react";
import { useContext } from "react";
import { BuyerContext } from "@/contexts/buyerContext";
import BuyerItem from "./BuyerItem";

// Maps through the buyersList array and creates an <li> with the information
function BuyersList() {
  const state = useContext(BuyerContext);

  return (
    <div className="buyersList">
      <h2>Buyers List</h2>
      {state.buyersList.map((buyer) => (
        <BuyerItem key={buyer.id} {...buyer} />
      ))}
    </div>
  );
}

export default BuyersList;
