export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_PLAYER_1_ID = "SET_PLAYER_1_ID";
export const SET_PLAYER_2_ID = "SET_PLAYER_2_ID";
export const SET_PLAYER_1_SCORE = "SET_PLAYER_1_SCORE";
export const SET_PLAYER_2_SCORE = "SET_PLAYER_2_SCORE";
export const SET_SERVE_COUNT = "SET_SERVE_COUNT";
export const SET_SERVING_PLAYER = "SET_SERVING_PLAYER";
export const DECLARE_WINNER = "DECLARE_WINNER";
export const RESET_GAME = "RESET_GAME";

const initialState = {
  inProgress: false,
  player1ID: undefined,
  player2ID: undefined,
  player1Score: 0,
  player2Score: 0,
  winningPlayer: undefined,
  serveCount: 0,
  whichPlayerIsServing: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return { ...state, inProgress: true };
    case END_GAME:
      return { ...state, inProgress: false };
    case RESET_GAME:
      return initialState;
    case SET_PLAYER_1_ID:
      return { ...state, player1ID: action.player1ID };
    case SET_PLAYER_2_ID:
      return { ...state, player2ID: action.player2ID };
    case SET_PLAYER_1_SCORE:
      return { ...state, player1Score: action.player1Score };
    case SET_PLAYER_2_SCORE:
      return { ...state, player2Score: action.player2Score };
    case SET_SERVE_COUNT:
      return { ...state, serveCount: action.serveCount };
    case SET_SERVING_PLAYER:
      return { ...state, whichPlayerIsServing: action.whichPlayerIsServing };
    case DECLARE_WINNER:
      return { ...state, winningPlayer: action.winningPlayer };
    default:
      return state;
  }
};

export default reducer;
