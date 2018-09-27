import { SAVE_PLAYERS } from "../reducers/players.reducer";

export const savePlayers = playerList => {
  return { type: SAVE_PLAYERS, playerList };
};

export const fetchPlayers = () => {
  return dispatch => {
    fetch("https://paddlr-test.herokuapp.com/api/users")
      .then(response => response.json())
      .then(playerList => dispatch(savePlayers(playerList)));
  };
};
