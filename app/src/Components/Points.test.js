import React from "react";
import { mount } from "enzyme";
import Points from "./Points";

describe("Points", () => {
  let points = mount(<Points />);
  it("renders the current points", () => {
    expect(points.find("h1").text()).toEqual(" 8");
  });
});
