import React from "react";
import { mount } from "enzyme";
import Navbar from "./Navbar";

describe("Navbar", () => {
  let navbar = mount(<Navbar />);
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
