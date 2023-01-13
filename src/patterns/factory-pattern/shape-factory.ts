import { Circle,Rectangle,Polygon, NullShape} from './concrete-shapes';


export class ShapeFactory{
    getShape(type:string){
        switch (type){
            case "CIRCLE": return new Circle();
            case "RECTANGLE": return new Rectangle();
            case "POLYGON": return new Polygon();
            default: return new NullShape();
        }
    }
}