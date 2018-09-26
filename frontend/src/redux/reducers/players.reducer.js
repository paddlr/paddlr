import { savePlayers } from "../actions/players.actions";

export const SAVE_PLAYERS = "SAVE_PLAYERS";

const initialState = { playerList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PLAYERS:
      return { ...state, playerList: action.playerList };
    default:
      return state;
  }
};

export default reducer;
