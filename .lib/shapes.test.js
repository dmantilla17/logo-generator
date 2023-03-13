const { default: test } = require("node:test");
const { execPath } = require("process");
const { bufferToggle } = require("rxjs");
const { Sqaure, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a blue circle element", () => {
    const circle = new Circle("derek", "blue", "circle", "white");

    except(circle.render()).toEqual(
      '<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><circle cx=“150” cy=“100" r=“80” fill=“green” /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” fill=“white”>SVG</text></svg>'
    );
  });
  test("should accept a fillcolor param", () => {
    const color = blue;
    except(circle.color.render()).toEqual(blue);
  });
});
describe("Triangle", () => {
  test("should render svg for a blue triangle element", () => {
    const circle = new Circle("derek", "blue", "triangle", "white");

    except(circle.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"<polygon points="150, 18 244, 182 56, 182" fill="bisque" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text></svg'
    );
  });
  test("should accept a fillcolor param", () => {
    const color = blue;
    except(Triangle.color.render()).toEqual(blue);
  });
});
describe("Sqaure", () => {
  test("should render svg for a blue sqaure element", () => {
    const circle = new Circle("derek", "blue", "sqaure", "white");

    except(circle.render()).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"<polygon points="150, 18 244, 182 56, 182" fill="bisque" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="#3a0467">SVG</text></svg'
    );
  });
  test("should accept a fillcolor param", () => {
    const color = blue;
    except(Sqaure.color.render()).toEqual(blue);
  });
});
module.exports = { Circle, Triangle, Sqaure };
