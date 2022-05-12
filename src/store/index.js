import { createStore, applyMiddleware, compose } from "redux"
import ProductReducer from "../store/reducer"
import { composeWithDevTools } from "redux-devtools-extension"

// const composeEnhancers = !__PROD__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//   : compose

export const store = createStore(ProductReducer, composeWithDevTools())
