import { BasePizza } from "./BasePizza";

interface ToppingsPizza extends BasePizza{
    pizza: BasePizza
}

export class ExtraCheesePizza implements ToppingsPizza{
    pizza: BasePizza;
    constructor(pizza: BasePizza){
        this.pizza = pizza;
    }
    cost() {
        console.log(' add 10 ')
        return this.pizza.cost() + 10;
    } 
}

export class MushroomPizza implements ToppingsPizza{
    pizza: BasePizza;
    constructor(pizza: BasePizza){
        this.pizza = pizza;
    }
    cost() {
        console.log(' add 10 ')
        return this.pizza.cost() + 20;
    } 
}