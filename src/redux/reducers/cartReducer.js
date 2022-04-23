import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions";

const initialState = {
  PRODUCTS: []
}

const CartReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_TO_CART: {
      const isFound = state.PRODUCTS.findIndex(product => product?.id === action.payload?.id);
      if (isFound !== -1) {
        state.PRODUCTS[isFound].quantity += 1;
        return {
          ...state
        }
      } else {
        action.payload.quantity = 1;
        return {
          ...state,
          PRODUCTS: [...state.PRODUCTS, action.payload]
        }
      }
    }
    case REMOVE_FROM_CART: {
      const productIndex = state.PRODUCTS.findIndex(product => product?.id === action?.payload?.id,);
      if (productIndex !== -1 && state.PRODUCTS[productIndex]?.quantity > 1) {
        state.PRODUCTS[productIndex].quantity -= 1;
        return {
          ...state
        }
      }
      return {
        ...state,
        PRODUCTS: state.PRODUCTS.filter(product => product?.id !== action.payload?.id)
      }
    }
    default:
      return state;
  }
}

export default CartReducer
