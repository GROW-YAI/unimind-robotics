import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const initialState = { items: [] };

function cartReducer(state, action) {
  console.log("cartReducer action:", action.type, action.payload); // debug
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, qty = 1 } = action.payload;
      const existing = state.items.find(i => i.id === product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
        };
      }
      return { ...state, items: [...state.items, { ...product, qty }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
    case "SET_QTY":
      return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i) };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, init => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    try { localStorage.setItem("cart", JSON.stringify(state)); } catch {}
  }, [state]);

  useEffect(() => {
    console.log("CartProvider mounted, initial state:", state);
  }, []);

  const value = {
    cart: state,
    addItem: (product, qty = 1) => dispatch({ type: "ADD_ITEM", payload: { product, qty } }),
    removeItem: id => dispatch({ type: "REMOVE_ITEM", payload: { id } }),
    setQty: (id, qty) => dispatch({ type: "SET_QTY", payload: { id, qty } }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}