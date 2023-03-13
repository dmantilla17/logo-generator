//importing inquirer to get user input
const inquirer= require("inquirer");
//creating an svg product 
const SVG = require("./svg")
//creating circle,triangle,sqaures classes to create shape objects
const { Circle,Triangle, Sqaure} =require("./shapes");
 
///Write file function to write data to a file
const { writeFile }= require("fs/promises");
const fs= require('fs');

class CLI{
    run(){
        return inquirer
        .prompt([
            {
                name: "text",
                type:"input",
                message:"Enter text for the logo."
            },
            {
                name: "textColor",
                type:"input",
                message:"Enter the text color."
            },
            {
            name: "shapeType",
                type:"list",
                message:"Select a shape for the logo."
            },
        ])
    
        .then(({text,textColor,shapeType})=> {
            if(shapeType == "circle"){
                fs.writeFileSync(`logo.svg`,`<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><${this.shapeType} cx=“150” cy=“100" r=“80” fill=“${shapeColor}” /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” 
                fill=${textColor}>${dbd}</svg>`)
            }
        )
        }
     else if(shapeType == "triangle"){
        fs.writeFileSync(`logo.svg`,`<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><${this.shapeType} cx=“150” cy=“100" r=“80” fill=“${shapeColor}” /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” 
        fill=${textColor}>${dbd}</svg>`)
     }
        else (shapeType == "circle"){
            fs.writeFileSync(`logo.svg`,`<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><${this.shapeType} cx=“150” cy=“100" r=“80” fill=“${shapeColor}” /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” 
            fill=${textColor}>${dbd}</svg>`)
        }
    } 

            
        
            
    
    
}