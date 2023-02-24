import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./reducer"
import thunkMiddleware from "redux-thunk"

const composeEnahanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnahanser(applyMiddleware(thunkMiddleware))
);

export default store;