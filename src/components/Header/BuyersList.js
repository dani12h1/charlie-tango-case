import React from "react";
import { useContext } from "react";
import { BuyerContext } from "@/contexts/buyerContext";

function BuyersList() {
  const state = useContext(BuyerContext);
  return (
    <div className="buyersList">
      <h2>Buyers List</h2>
      {state.buyersList.map((buyer) => {
        return <li key={buyer.id}>{buyer.maxPrice}</li>;
      })}
    </div>
  );
}

export default BuyersList;
