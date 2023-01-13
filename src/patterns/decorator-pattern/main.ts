import { FarmHouse} from './BasePizza';
import { ExtraCheesePizza,MushroomPizza} from './Toppings';
export function main(){
    const pizza = new FarmHouse();
    const cheesePizza = new ExtraCheesePizza(pizza);
    console.log('FINAL cost = ',cheesePizza.cost());
    const x3 = new MushroomPizza(cheesePizza);
    console.log('FINAL cost = ',x3.cost());
}
