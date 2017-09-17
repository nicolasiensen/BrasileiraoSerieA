import React from "react";
import Standing from "./Standing";

import renderer from "react-test-renderer";

const data = [
  { position: 1, teamName: "Grêmio", points: 30, playedGames: 10 },
  { position: 2, teamName: "Corinthians", points: 27, playedGames: 10 }
];

const onRefresh = jest.fn();
const refreshing = false;

it("should render a header", () => {
  const rendered = renderer.create(<Standing />).toJSON();
  expect(rendered.children[0].children.map(c => c.children)).toEqual([
    null,
    ["Classificação"],
    ["P"],
    ["J"],
    ["%"]
  ]);
});

it("should forward its props to a FlatList", () => {
  const rendered = renderer
    .create(
      <Standing data={data} onRefresh={onRefresh} refreshing={refreshing} />
    )
    .toJSON();
  expect(rendered.children[1].type).toEqual("RCTScrollView");
  expect(rendered.children[1].props.data).toEqual(data);
  expect(rendered.children[1].props.onRefresh).toEqual(onRefresh);
  expect(rendered.children[1].props.refreshing).toEqual(refreshing);
});
