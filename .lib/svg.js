class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  render() {
    `<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><circle cx=“150” cy=“100" r=“80” fill=${this.textElement}>${this.shapeElement} /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” fill=“white”>SVG</text></svg>`;
  }
  setText(text, textColor) {
    if (text.length > 3) {
      throw new console.error("Text must be less than 3 characters");
    }
    this.textElement = `<text x=“150” y=“125" font-size=“60” text-anchor=“middle” fill=${textColor}>${text}</text>`;
  }
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}
module.exports = SVG;
