import { ADD_TO_CART } from "../constant";
import { REMOVE_FROM_CART } from "../constant";

const initialState = {
  cartData: [],
};

export default function cartItems(state = [], action) {
  //   console.log("reducer", action);
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { cartData: action.data }];

    case REMOVE_FROM_CART:
      state.pop();
      return [...state];
    default:
      return state;
  }
}
