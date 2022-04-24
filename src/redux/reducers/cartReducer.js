import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions";

const localState = localStorage.getItem("cart");

const initialState = {
  PRODUCTS: localState ? JSON.parse(localState) : []
}

const CartReducer = (state = initialState, action) => {
  switch (action?.type) {
  case ADD_TO_CART: {
    const isFoundSize = state.PRODUCTS.findIndex(product => product?.id === action.payload?.id && product?.size === action.payload?.size);
    if (isFoundSize !== -1) {
      let newState = [...state.PRODUCTS]
      newState[isFoundSize].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(newState));
      return {
        ...state,
        PRODUCTS: newState
      }
    } else {
      action.payload.quantity = 1;
      localStorage.setItem("cart", JSON.stringify([...state.PRODUCTS, action.payload]));
      return {
        ...state,
        PRODUCTS: [...state.PRODUCTS, action.payload]
      }
    }
  }
  case REMOVE_FROM_CART: {
    const productIndex = state.PRODUCTS.findIndex(product => product?.id === action?.payload?.id && product?.size === action?.payload?.size);
    if (productIndex !== -1 && state.PRODUCTS[productIndex]?.quantity > 1) {
      let newState = [...state.PRODUCTS];
      newState[productIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(newState));
      return {
        ...state,
        PRODUCTS: newState
      }
    } else {
      const foundItem = state.PRODUCTS.find(product => product.cartId === action.payload.cartId);
      const newState = state.PRODUCTS.filter(product => product?.cartId !== foundItem?.cartId);
      localStorage.setItem("cart", JSON.stringify(newState));
      return {
        ...state,
        PRODUCTS: newState
      }
    }
  }
  default:
    return state;
  }
}

export default CartReducer
