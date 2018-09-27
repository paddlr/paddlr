import rootReducer from "../../store.js";
// import * as actions from "../../actions/game.actions";
import * as actions from "../reducers/game.reducers";

// describe("root reducer", () => {
//   it("returns the initial state", () => {
//     expect(rootReducer({})).toEqual({ players: players, game: game });
//   });
// });

describe("startGame", () => {
  it("creates an action to start the game", () => {
    const expectedAction = {
      type: actions.START_GAME,
    };
    expect(actions.startGame()).toEqual(expectedAction);
  });
});
