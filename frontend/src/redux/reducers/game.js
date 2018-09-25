export const START_GAME = "START_GAME";
export const END_GAME = "END_GAME";
export const SET_PLAYER_ID = "SET_PLAYER_ID";
export const SET_PLAYER_SCORE = "SET_PLAYER_SCORE";
export const RESET_PLAYERS = "RESET_PLAYERS";

const initialState = {
  inProgress: false,
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
    case RESET_PLAYERS:
      return { ...state, players: initialState.players };
    default:
      return state;
  }
};

export default users;
