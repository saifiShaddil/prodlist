import { ADD_PROD } from "./actionType"

export const addNewProduct = (product) => async (dispatch) => {
  dispatch({
    type: ADD_PROD,
    payload: product,
  })
}
