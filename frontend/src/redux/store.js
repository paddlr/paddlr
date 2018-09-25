import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import users from "./reducers/users";
import game from "./reducers/game";

const rootReducer = combineReducers({
  users,
  game,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
