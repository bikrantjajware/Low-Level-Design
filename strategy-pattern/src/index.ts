import { NormalVehicle } from "./normal-vehicle";
import { OffroadVehicle } from "./offroad-vehicle";
import { SportsVehicle } from "./sports-vehicle";

function main(){
    const sports = new SportsVehicle();
    const normal = new NormalVehicle();
    const offroad = new OffroadVehicle();
    sports.drive();
    normal.drive();
    offroad.drive();
}

main();