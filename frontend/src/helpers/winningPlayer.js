const MINIMUM_HIGH_SCORE = 21;

export const hasWinningPlayer = players =>
  players.some(
    (player, _, bothPlayers) =>
      player.score >= MINIMUM_HIGH_SCORE &&
      bothPlayers.find(otherPlayer => otherPlayer.score <= player.score - 2)
  );

export const getWinningPlayer = players =>
  hasWinningPlayer(players)
    ? players.sort((a, b) => (a.score > b.score ? -1 : 1)).slice(0, 1)
    : undefined;
