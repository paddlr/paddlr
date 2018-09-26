import { createStore, combineReducers } from "redux";
import players from "./reducers/players.reducer";
import game from "./reducers/game.reducer";

const rootReducer = combineReducers({ players: players, game: game });
const store = createStore(rootReducer);

export default store;
