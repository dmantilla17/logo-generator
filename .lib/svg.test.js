const SVG = require("./svg");
const { default: test } = require("node:test");
const { Circle } = require("./shapes");

test("should render 300 x 200 svg element", () => {
  const svg = new SVG();
  except(
    svg
      .render()
      .toEqual(
        `<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”>`
      )
  );
});
test("should append text element", () => {
  const test = new SVG();
  const textColor = "blue";
  const text = "DAD";
  const textElement = "";
  test.setText(text, textColor);

  expect(svg.textElement).toMatch(Circle);
});
test("should throw if text exceeds 3 characters", () => {
  const characters = new SVG();
  const textColor = "blue";
  const text = "DAD";
  const textElement = "";
  test.setText(text, textColor);

  expect(svg.textElement).toMatch(Circle);
});
