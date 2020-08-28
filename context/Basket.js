import React, { createContext, useReducer, useContext } from "react";

const ProductContext = createContext();
const ProductDispatchContext = createContext();

const productReducer = (state, { type, quantity }) => {
  switch (type) {
    case "add":
      return { totalProducts: state.totalProducts + quantity };
      break;

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, { totalProducts: 0 });

  return (
    <ProductContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductContext.Provider>
  );
};

const useProductState = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductState must be used within ProductProvider");
  }

  return context;
};

const useProductDispatch = () => {
  const context = useContext(ProductDispatchContext);
  if (context === undefined) {
    throw new Error("useProductDispatch must be used within ProductProvider");
  }

  return context;
};

export { ProductProvider, useProductState, useProductDispatch };
