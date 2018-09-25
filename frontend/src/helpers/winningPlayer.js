const MINIMUM_HIGH_SCORE = 21;

export const hasWinningPlayer = players =>
  // We want to know whether one or both of the players
  // have the minimum high score, and has beaten the other
  // player by 2 serves.
  players.some(
    // Array.some MDN:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    (player, _, bothPlayers) =>
      // First, we check to see whether this player has the minimum winning score
      player.score >= MINIMUM_HIGH_SCORE &&
      // Secondly, we look through the array (in this case only 2 items) in order
      // to ascertain whether any other players have a score that is 2 less than
      // that of the current player. We can use array.find here as we don't care
      // how many of these other players there are - either there is another
      // player who satisfies this criterion, or there isn't.
      bothPlayers.find(otherPlayer => otherPlayer.score <= player.score - 2)
  );

export const sortByHighestScore = (currentPlayer, nextPlayer) =>
  // -1: goes up in the ordering
  // 0: stays put in the ordering
  // 1: goes down in the ordering
  currentPlayer.score > nextPlayer.score ? -1 : 1;

export const getWinningPlayer = players =>
  // If there is a winning player, sort players by
  // high score, and pick off the topmost player.
  // Do this using slice(0, 1), which starts the
  // slice at the first index of the array, and
  // only takes one item.
  // This will of course be the winner.
  hasWinningPlayer(players) ? players.sort(sortByHighestScore).slice(0, 1) : undefined;
