import { SAVE_PLAYERS } from "../reducers/players.reducer";

export const savePlayers = playerList => {
  return { type: SAVE_PLAYERS, playerList };
};
