export interface BasePizza {
    cost: () => number
}

export class Margherita implements BasePizza{
    cost() {
        console.log('100 ')
        return 100;
    } 
}
export class FarmHouse implements BasePizza{
    cost() {
        console.log('200 ')
        return 200;
    } 
}

export class VegDelight implements BasePizza{
    cost() {
        console.log('180 ')
        return 180;
    } 
}