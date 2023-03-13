class Shape {
    constructor(text, shapeColor, shapeType, textColor){
        this.text=text;
        this.shapeColor= shapeColor;
        this.shapeType= shapeType;
        this.textColor= textColor;

    }
    render (){
        return `<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”><${this.shapeType} cx=“150” cy=“100" r=“80” fill=“green” /><text x=“150” y=“125" font-size=“60” text-anchor=“middle” fill=“white”>SVG</text></svg>`
    }
}
class Circle extends Shape{
    constructor (text, shapeColor, shapeType, textColor) {
        super (text, shapeColor, shapeType, textColor)
    }
}
class Triangle extends Shape {
    constructor (text, shapeColor, shapeType, textColor) {
        super (text, shapeColor, shapeType, textColor)
}
}
class Sqaure extends Shape {
    constructor (text, shapeColor, shapeType, text){
        super (text, shapeColor, shapeType, textColor)
    }
}
module.exports = { Circle, Triangle, Sqaure};
