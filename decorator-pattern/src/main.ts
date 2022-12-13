import { FarmHouse} from './BasePizza';
import { ExtraCheesePizza,MushroomPizza} from './Toppings';
function main(){
    const pizza = new FarmHouse();
    const cheesePizza = new ExtraCheesePizza(pizza);
    console.log('cost = ',cheesePizza.cost());
    const x3 = new MushroomPizza(cheesePizza);
    console.log('cost = ',x3.cost());
}

main();