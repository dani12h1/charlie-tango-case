import React from "react";
import { estateTypes } from "@/data/estateTypes";

export default function EstOption() {
  console.log(estateTypes);

  return estateTypes.map((estate) => (
    <option
      key={estate.id}
      value={estate.id}
      placeholder="Select a property type"
    >
      {estate.name}
    </option>
  ));
}
