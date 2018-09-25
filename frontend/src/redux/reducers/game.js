export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_PLAYER_ID = "SET_PLAYER_ID";
export const SET_PLAYER_SCORE = "SET_PLAYER_SCORE";
export const RESET_PLAYERS = "RESET_PLAYERS";
export const SET_SERVE = "SET_SERVE";
export const RESET_SERVE = "RESET_SERVE";
export const CHANGE_SERVER = "CHANGE_SERVER";

const initialState = {
  inProgress: false,
  // At the beginning of a game, nobody has served
  serveCount: 0,
  // This will be used to identify the serving player,
  // e.g. players[0] or players[1]. This should always
  // be 0 or 1.
  currentServer: 0,
  players: [
    {
      id: undefined,
      score: 0,
    },
    {
      id: undefined,
      score: 0,
    },
  ],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, inProgress: true };
    case END_GAME:
      return { ...state, inProgress: false };
    case SET_PLAYER_ID:
    case SET_PLAYER_SCORE:
      return { ...state, players: action.payload };
    // Increment the total number of serves in the game
    case SET_SERVE:
      return { ...state, serveCount: action.payload };
    // Change the index of the player who's serving
    case CHANGE_SERVER:
      return { ...state, currentServer: action.payload };
    case RESET_SERVE:
      return { ...state, serveCount: initialState.serveCount };
    case RESET_PLAYERS:
      return { ...state, players: initialState.players };
    default:
      return state;
  }
};

export default users;
