export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_PLAYER_1_ID = "SET_PLAYER_1_ID";
export const SET_PLAYER_2_ID = "SET_PLAYER_2_ID";
export const SET_PLAYER_1_SCORE = "SET_PLAYER_1_SCORE";
export const SET_PLAYER_2_SCORE = "SET_PLAYER_2_SCORE";
export const SET_SERVE_COUNT = "SET_SERVE_COUNT";
export const SET_SERVING_PLAYER = "SET_SERVING_PLAYER";
export const DECLARE_WINNER = "DECLARE_WINNER";

const initialState = {
  inProgress: false,
  player1ID: undefined,
  player2ID: undefined,
  player1Score: 0,
  player2Score: 0,
  winningPlayer: undefined,
  serveCount: 0,
  whichPlayerIsServing: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return state;
    case END_GAME:
      return state;
    case SET_PLAYER_1_ID:
      return state;
    case SET_PLAYER_2_ID:
      return state;
    case SET_PLAYER_1_SCORE:
      return state;
    case SET_PLAYER_2_SCORE:
      return state;
    case SET_SERVE_COUNT:
      return state;
    case SET_SERVING_PLAYER:
      return state;
    case DECLARE_WINNER:
      return state;
  }
};
