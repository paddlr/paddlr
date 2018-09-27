import React from "react";
import { shallow } from "enzyme";
import * as actions from "../game.actions";

describe("startGame", () => {
  it("creates an action to start the game", () => {
    const expectedAction = {
      type: actions.START_GAME,
    };
    expect(actions.startGame()).toEqual(expectedAction);
  });
});
