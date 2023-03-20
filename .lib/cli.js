//importing inquirer to get user input
const inquirer = require("inquirer");
//creating an svg product
const SVG = require("./svg");
//creating circle,triangle,sqaures classes to create shape objects
const { Circle, Triangle, Sqaure } = require("./shapes");

///Write file function to write data to a file
const { writeFile } = require("fs/promises");
const fs = require("fs");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Enter text for the logo.",
          name: "text",
        },
        {
          type: "input",
          message: "Enter the text color.",
          name: "textColor",
        },
        {
          type: "list",
          message: "Select a shape for the logo.",
          name: "shapeType",
          choices: ["cirlce", "sqaure", "triangle"],
        },
        {
          type: "input",
          message: "choose a color",
          name: "shapeColor",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        switch (shapeType) {
          case "triangle":
            shape = new Triangle();
            break;

          case "circle":
            shape = new Circle();
            break;
          case "sqaure":
            shape = new Sqaure();
            break;
        }
        shape.setColor(shapeColor);
        const svg = new SVG();
        //using svg to choose shapes
        svg.setShape(shape);

        svg.setText(text, textColor);
        //creating the logo to the file
        return writeFile("my logo", svg.render());
      })
      .then(() => {
        console.log("logo created");
      });
  }
}
