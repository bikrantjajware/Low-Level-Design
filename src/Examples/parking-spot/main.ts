import { EntryGate } from "./entry-gate";
import { ExitGate } from "./exit-gate";
import { THREEWheelerSpot, TWOWheelerSpot } from "./spot";
import { SpotManager } from "./spot-manager";
import { Ticket } from "./ticket";
import { Vehicle, VehicleType } from "./vehicle";


function main(){
    const v1 = new Vehicle(VehicleType.THREE_WHEELER,'111');
    const v2 = new Vehicle(VehicleType.THREE_WHEELER,'222');
    const v3 = new Vehicle(VehicleType.TWO_WHEELER,'333');
    const v4 = new Vehicle(VehicleType.TWO_WHEELER,'444');
    let vehicles = [v1,v2,v3,v4];
    const spots = [ new TWOWheelerSpot(),new TWOWheelerSpot(),new TWOWheelerSpot(),
                    new THREEWheelerSpot(),new THREEWheelerSpot(),new THREEWheelerSpot()];
    const spotManager = new SpotManager(spots,'first empty spot');
    const entryGate = new EntryGate(spotManager);
    const ticketMap = new Map<Vehicle,Ticket>();
    console.log(`### TEST #1 inserting 4vehicles`);
    
    for(let v of vehicles){
        const ticket = entryGate.bookVehicleSpot(v);
        if(ticket){
            ticketMap.set(v,ticket);
        }else{
            console.log("cannot park vehicle");
        }
        spotManager.print();
    }
    const exitGate = new ExitGate(spotManager);
    console.log(`### TEST #2 removing 4 vehicles`);
    for(let v of vehicles){
        exitGate.removeVehicle(ticketMap.get(v));
        spotManager.print();
    }
    vehicles = [...vehicles,new Vehicle(VehicleType.TWO_WHEELER,'555'),new Vehicle(VehicleType.TWO_WHEELER,'666'),
                         new Vehicle(VehicleType.TWO_WHEELER,'777'),new Vehicle(VehicleType.TWO_WHEELER,'888') ];
    console.log(`### TEST #3 inserting 8 vehicles. 3 TWO-Wheel spot not available`);
    for(let v of vehicles){
        const ticket = entryGate.bookVehicleSpot(v);
        if(ticket){
            ticketMap.set(v,ticket);
        }else{
            console.log("cannot park vehicle");
        }
        spotManager.print();
    }
}

main();