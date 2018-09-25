import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Components/Navbar";

describe("Navbar", () => {
  let navbar = shallow(<Navbar />);
  it("renders the paddlr logo", () => {
    expect(navbar.find(".paddle-logo").exists()).toBe(true);
    expect(navbar.find(".paddle-button").exists()).toBe(true);
  });
  it("renders the PLAY link", () => {
    expect(
      navbar
        .find("a")
        .at(0)
        .text()
    ).toEqual("PLAY");
  });
  it("renders the TOURNAMENTS link", () => {
    expect(
      navbar
        .find("a")
        .at(1)
        .text()
    ).toEqual("TOURNAMENTS");
  });
  it("renders the LEADERBOARDS link", () => {
    expect(
      navbar
        .find("a")
        .at(2)
        .text()
    ).toEqual("LEADERBOARDS");
  });
  it("renders the LOGOUT link", () => {
    expect(
      navbar
        .find("a")
        .at(3)
        .text()
    ).toEqual("LOGOUT");
  });
});
