export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_PLAYER_ID = "SET_PLAYER_ID";
export const SET_PLAYER_SCORE = "SET_PLAYER_SCORE";
export const RESET_PLAYERS = "RESET_PLAYERS";
export const INCREMENT_SERVE = "INCREMENT_SERVE";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const RESET_SERVE = "RESET_SERVE";
export const CHANGE_SERVER = "CHANGE_SERVER";

const initialState = {
  inProgress: false,
  serveCount: 0,
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
    case INCREMENT_SERVE:
      return { ...state, serveCount: action.payload };
    case CHANGE_SERVER:
      return { ...state, swapServes: action.payload };
    case RESET_SERVE:
      return { ...state, serveCount: initialState.serveCount };
    case RESET_PLAYERS:
      return { ...state, players: initialState.players };
    default:
      return state;
  }
};

export default users;
