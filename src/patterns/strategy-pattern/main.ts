import { NormalVehicle } from "./normal-vehicle";
import { OffroadVehicle } from "./offroad-vehicle";
import { SportsVehicle } from "./sports-vehicle";

export function main(){
    const sports = new SportsVehicle();
    const normal = new NormalVehicle();
    const offroad = new OffroadVehicle();
    console.log('sports car');
    sports.drive();
    console.log('normal car');
    normal.drive();
    console.log('sports car');
    offroad.drive();
}
