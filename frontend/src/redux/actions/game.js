import { hasWinningPlayer } from "../../helpers/winningPlayer";

import {
  START_GAME,
  END_GAME,
  SET_PLAYER_ID,
  SET_PLAYER_SCORE,
  RESET_PLAYERS,
  INCREMENT_SERVE,
  CHANGE_SERVER,
  RESET_SERVE,
} from "../reducers/game";

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
};

export const incrementServe = (dispatch, getState) => {
  const currentServer = getState().game.serveCount;
  dispatch({
    type: INCREMENT_SERVE,
    payload: currentServer + 1,
  });
};

export const swapServes = () => (dispatch, getState) => {
  const SERVE_CHANGE = 5;
  const game = getState().game;
  const players = game.players.map(player => player.id);
  const totalServes = game.serves;
  const currentServer = game.currentServer;
  const otherServer = players.find(player => player.id !== currentServer);

  const isGreaterThan20 = totalServes >= 20;
  const isDivisibleBy5 = totalServes % SERVE_CHANGE === 0;

  if (isGreaterThan20 || isDivisibleBy5) {
    dispatch({
      type: CHANGE_SERVER,
      payload: otherServer,
    });
  }
};

export const incrementScore = (which, amount) => (dispatch, getState) => {
  const players = getState().game.players;
  const updatedPlayers = players.map(
    (player, index) =>
      index === which
        ? { ...player, score: Math.max(0, player.score + amount) }
        : player
  );
  dispatch(updatedPlayers(updatedPlayers));
  dispatch(incrementServe());
  dispatch(swapServes());
};

// export const incrementScore = (which, amount) => (dispatch, getState) => {
//   const players = getState().game.players.map((player, index) => ({
//     ...player,
//     score:
//       which === index && Number.isFinite(amount)
//         ? Math.max(0, player.score + amount)
//         : player.score,
//   }));
//   dispatch({
//     type: SET_PLAYER_SCORE,
//     payload: players,
//   });
// };

export const resetPlayers = () => ({
  type: RESET_PLAYERS,
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
