import React from "react";
import renderer from "react-test-renderer";

import App from "./App";
import * as api from "./api";
import { findComponent, afterPromises } from "./testUtils.js";

jest.mock("./api");

it("should render a loading standing", () => {
  const rendered = renderer.create(<App />).toJSON();
  const standing = findComponent(rendered, { type: "RCTScrollView" });
  expect(standing.props.refreshing).toBeTruthy();
});

describe("when there is an error while getting the league table", () => {
  beforeEach(() => {
    api.__setGetLeagueTableResponse(
      new Promise((resolve, reject) => reject("Error!"))
    );
  });

  it("should render an error message", done => {
    const component = renderer.create(<App />);

    afterPromises(done, () => {
      const rendered = component.toJSON();

      const errorMessage = findComponent(rendered, {
        type: "Text",
        children: ["Error while loading data"]
      });

      expect(errorMessage).toBeTruthy();
    });
  });
});

describe("when the league table is loaded", () => {
  const standing = [
    { position: 1, teamName: "Grêmio", points: 30, playedGames: 10 },
    { position: 2, teamName: "Corinthians", points: 27, playedGames: 10 }
  ];

  let component;
  let rendered;
  let standingComponent;

  beforeEach(done => {
    api.__setGetLeagueTableResponse(
      new Promise(resolve => resolve({ standing }))
    );

    component = renderer.create(<App />);

    afterPromises(done, () => {
      rendered = component.toJSON();
      standingComponent = findComponent(rendered, { type: "RCTScrollView" });
    });
  });

  it("should render the standing with the loaded data", () => {
    expect(standingComponent.props.data).toBe(standing);
  });

  it("should render the standing", () => {
    expect(standingComponent.props.refreshing).toBeFalsy();
  });
});
