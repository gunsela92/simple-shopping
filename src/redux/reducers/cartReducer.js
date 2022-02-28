import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions";

const initialState = {
  PRODUCTS: []
}

const CartReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_TO_CART:
      return {
        ...state,
        PRODUCTS: [...state?.PRODUCTS, action?.payload]
      }
    case REMOVE_FROM_CART:
        return {
        ...state,
          PRODUCTS: state?.PRODUCTS?.filter(e => e?.cartId !== action?.payload)
        }
    default:
      return state;
  }
}

export default CartReducer