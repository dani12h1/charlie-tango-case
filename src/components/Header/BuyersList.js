import React from "react";
import { useContext } from "react";
import { BuyerContext } from "@/contexts/buyerContext";

// Maps through the buyersList array and creates an <li> with the information
function BuyersList() {
  const state = useContext(BuyerContext);
  return (
    <div className="buyersList">
      <h2>Buyers List</h2>
      {state.buyersList.map((buyer) => {
        return <li key={buyer.id}>Ref nr. {buyer.id}</li>;
      })}
    </div>
  );
}

export default BuyersList;
