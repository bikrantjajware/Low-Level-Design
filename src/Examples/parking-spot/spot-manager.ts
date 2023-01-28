import { Spot } from "./spot";
import { Vehicle, VehicleType } from "./vehicle";

class SpotManager{
    private spots: Spot[]
    private strategy: string
    constructor(list: Spot[],strategy:string){
        this.spots = list;
        this.strategy = strategy;
    }
    print(){
        console.log(this.spots)
    }

    parkVehicle(vehicle:Vehicle,spot:Spot){
        if(spot.vehicle){
            return false
        }
        spot.vehicle = vehicle;
        return true;
    }
    removeVehicle(spot:Spot){
        spot.vehicle = undefined;
    }

    getParkingSpot(type: VehicleType){
        for(let spot of this.spots){
            if(!spot.vehicle && spot.type === type)
                return spot;
        }
    }

    getSpottByVehicle(vehicle:Vehicle){
        for(let spot of this.spots){
            if(spot.vehicle === vehicle)
            return spot;
        }
    }

    //add more spots to spot list
    addParkingSpots(){
    }
    removeParkingSpots(){
    }
    
}

export {
    SpotManager
}