import {
  START_GAME,
  END_GAME,
  SET_PLAYER_1_ID,
  SET_PLAYER_2_ID,
  SET_PLAYER_1_SCORE,
  SET_PLAYER_2_SCORE,
  SET_SERVE_COUNT,
  SET_SERVING_PLAYER,
  DECLARE_WINNER,
} from "../reducers/game.reducer";

export const startGame = () => {
  return { type: START_GAME };
};

export const endGame = () => {
  return { type: END_GAME };
};

export const setPlayer1ID = player1ID => {
  return { type: SET_PLAYER_1_ID, player1ID: player1ID };
};

export const setPlayer2ID = player2ID => {
  return { type: SET_PLAYER_2_ID, player2ID: player2ID };
};

export const setPlayer1Score = player1Score => {
  return { type: SET_PLAYER_1_SCORE, player1Score: player1Score };
};

export const setPlayer2Score = player2Score => {
  return { type: SET_PLAYER_2_SCORE, player2Score: player2Score };
};

export const setServeCount = serveCount => {
  return { type: SET_SERVE_COUNT, serveCount: serveCount };
};

export const setServingPlayer = whichPlayerIsServing => {
  return { type: SET_SERVING_PLAYER, whichPlayerIsServing: whichPlayerIsServing };
};

export const declareWinner = winningPlayer => {
  return { type: DECLARE_WINNER, winningPlayer: winningPlayer };
};
