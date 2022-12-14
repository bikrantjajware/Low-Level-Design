import {ShapeFactory} from './shape-factory';

export function main(){
    const factory = new ShapeFactory();
    const circle = factory.getShape("CIRCLE");
    circle.draw();
    const rectangle = factory.getShape("RECTANGLE");
    rectangle.draw();
    const polygon = factory.getShape("POLYGON");
    polygon.draw();
}