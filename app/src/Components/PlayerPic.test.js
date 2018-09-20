import React from "react";
import { shallow } from "enzyme";
import PlayerPic from "./PlayerPic";

describe("PlayerPic", () => {
  let playerPic = shallow(<PlayerPic />);

  it("renders the player pic", () => {
    expect(playerPic.find(".player-pic").exists()).toBe(true);
  });
});
