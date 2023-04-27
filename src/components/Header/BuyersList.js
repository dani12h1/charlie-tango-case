import React from "react";
import { useContext } from "react";
import { BuyerContext, DistpatchContext } from "@/contexts/buyerContext";
import BuyerItem from "./BuyerItem";
import { reducer } from "@/contexts/buyerContext";

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
