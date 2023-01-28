import { Spot } from "./spot";
import { SpotManager } from "./spot-manager";
import { Ticket } from "./ticket";
import { Vehicle, VehicleType } from "./vehicle";

class EntryGate{
    private spotManager: SpotManager;
    constructor(manager:SpotManager){
        this.spotManager = manager;
    }
    private getParkingSpot(type:VehicleType){
        return this.spotManager.getParkingSpot(type);
    }
    bookVehicleSpot(vehicle:Vehicle){
        const spot = this.getParkingSpot(vehicle.type);
        if(!spot){
            console.log("no spot left");
            return;
        }
        this.spotManager.parkVehicle(vehicle,spot);
        const ticket = this.generateParkingTicket(vehicle,spot);
        return ticket;
    }
    private generateParkingTicket(vehicle:Vehicle,spot:Spot){
        const ticket = new Ticket(vehicle,spot,new Date());
        return ticket;
    }


}

export{
    EntryGate
}