import { SpotManager } from "./spot-manager";
import { Ticket } from "./ticket";
import { Vehicle } from "./vehicle";
class PriceComputationManager {
    getPrice(ticket: Ticket,rate:number){
        const updatedTicket = {
            ...ticket,
            price: rate*(Math.random()+10)
        }
        return updatedTicket;
    }
}

class ExitGate{
    priceComputationManager: PriceComputationManager
    spotManager: SpotManager
    constructor(spotManager: SpotManager){
        this.priceComputationManager = new PriceComputationManager();
        this.spotManager = spotManager;
    }
    
    removeVehicle(ticket?:Ticket){
        if(ticket){
            this.priceComputation(ticket);
            return this.spotManager.removeVehicle(ticket.parkingSpot);

        }
        console.log('vehicle is not parked');
    }
    priceComputation(ticket:Ticket){
        const ticketWithPrice = this.priceComputationManager.getPrice(ticket,ticket.parkingSpot.price);
        console.log(ticketWithPrice);
    }
}

export {
    ExitGate
}