import React from "react";
import { shallow } from "enzyme";
import Points from "./Points";

describe("Points", () => {
  let points = shallow(<Points />);
  it("renders the current points", () => {
    expect(points.find("h1").text()).toEqual(" 8");
  });
});
