import {Shape} from './shape';

export class Circle implements Shape{
    draw(){
        console.log('drawing circle')
    }
}
export class Rectangle implements Shape{
    draw(){
        console.log('drawing rectangle')
    }
}
export class Polygon implements Shape{
    draw(){
        console.log('drawing polygon')
    }
}

export class NullShape implements Shape{
    draw(){
        console.log('drawing NULL')
    }
}