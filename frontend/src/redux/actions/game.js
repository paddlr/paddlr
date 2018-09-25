import { hasWinningPlayer } from "../../helpers/winningPlayer";

import {
  START_GAME,
  END_GAME,
  SET_PLAYER_ID,
  SET_PLAYER_SCORE,
  RESET_PLAYERS,
  SET_SERVE,
  CHANGE_SERVER,
  RESET_SERVE,
} from "../reducers/game";

const SERVE_CHANGE = 5;
const SERVE_SCORE_FOR_QUICK_SWAP = 20;

export const startGame = () => ({
  type: START_GAME,
});

export const endGame = () => ({
  type: END_GAME,
});

export const setPlayerId = (which, id) => (dispatch, getState) => {
  const players = getState().game.players.map((player, index) => ({
    ...player,
    id: which === index ? id : player.id,
  }));
  dispatch({
    type: SET_PLAYER_ID,
    payload: players,
  });
};

export const setPlayerScore = (which, amount) => (dispatch, getState) => {
  const players = getState().game.players.map((player, index) => ({
    ...player,
    score:
      which === index && Number.isFinite(amount)
        ? Math.max(0, player.score + amount)
        : player.score,
  }));
  dispatch({
    type: SET_PLAYER_SCORE,
    payload: players,
  });
  dispatch(setServe());
  dispatch(swapServes());
};

export const setServe = () => (dispatch, getState) => {
  const serveCount = getState().game.serveCount;
  dispatch({
    type: SET_SERVE,
    payload: serveCount + 1,
  });
};

export const swapServes = () => (dispatch, getState) => {
  const { players, serveCount, currentServer } = getState().game;

  const aPlayerHasAScoreOf20 = !!players.find(player => player.score >= SERVE_SCORE_FOR_QUICK_SWAP);

  const servesAreDivisibleBy5 = serveCount % SERVE_CHANGE === 0;

  if (aPlayerHasAScoreOf20 || servesAreDivisibleBy5) {
    dispatch({
      type: CHANGE_SERVER,
      payload: currentServer === 1 ? 0 : 1,
    });
  }
};

export const resetPlayers = () => ({
  type: RESET_PLAYERS,
});

export const resetServe = () => ({
  type: RESET_SERVE,
});

export const sendMatchToLeaderboard = () => (_, getState) => {
  const players = getState().game.players;
  console.warn(players);
  if (hasWinningPlayer(players)) {
    fetch("https://paddlr-test.herokuapp.com/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        players: players.map(player => ({
          player_id: player.id,
          player_score: player.score,
        })),
      }),
    })
      .then(data => data.json())
      .then(response => console.log("Result Saved", response));
  }
};
