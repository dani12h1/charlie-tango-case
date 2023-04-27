import { createContext, useReducer } from "react";

export const BuyerContext = createContext();
export const DistpatchContext = createContext();
const initialState = {
  buyersList: [],
  name: "",
  email: "",
  phone: "",
  price: "",
};

function reducer(state, action) {
  console.log(state);

  switch (action.action) {
    case "SET_ESTATE_INFO":
      return state;
    case "TOGGLE_BUYER":
      const exists = state.buyersList.find(
        (buyer) => buyer.id === action.payload.id
      );
      if (exists) {
        console.log(state.buyersList.length);
        return {
          ...state,
          buyersList: state.buyersList.filter(
            (obj) => action.payload.id !== obj.id
          ),
        };
      } else {
        console.log(state.buyersList.length);
        return {
          ...state,
          buyersList: state.buyersList.concat(action.payload),
        };
      }
  }
}

export const BuyerListProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <BuyerContext.Provider value={data}>
      <DistpatchContext.Provider value={dispatch}>
        {children}
      </DistpatchContext.Provider>
    </BuyerContext.Provider>
  );
};
