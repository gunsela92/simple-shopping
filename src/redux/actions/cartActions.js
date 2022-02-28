import { v4 as uuidv4 } from 'uuid';

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addProductToCart = (data) => {
    data.cartId = uuidv4();
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: data
        })
    }
}

export const removeProductFromCart = (data) => ({
    type: REMOVE_FROM_CART,
    payload: data,
})
