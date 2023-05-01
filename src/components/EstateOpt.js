import React from "react";
import { estateTypes } from "@/data/estateTypes";

export default function EstOption() {
  return estateTypes.map((estate) => (
    <option key={estate.id} value={estate.id}>
      {estate.name}
    </option>
  ));
}
