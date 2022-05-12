import { ADD_PROD, REMOVE_PROD } from "./actionType"

const initialState = {
  data: [],
  success: false,
}

const ProdReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_PROD:
      return {
        ...state,
        data: [...state.data, payload],
        success: !state.success,
      }
    case REMOVE_PROD:
      let newArr = state.data.filter((item) => item.id !== payload)

      return {
        ...state,
        data: newArr,
        success: !state.success,
      }
    default:
      return state
  }
}

export default ProdReducer
