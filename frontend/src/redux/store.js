import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import players from "./reducers/players.reducer";
import game from "./reducers/game.reducer";

const rootReducer = combineReducers({ players: players, game: game });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
