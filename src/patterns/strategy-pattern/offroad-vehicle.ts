import { SpecialDriveStrategy } from "./DriveStrategy";
import { Vehicle } from "./vechicle";

export class OffroadVehicle extends Vehicle{
    constructor(){
        super(new SpecialDriveStrategy());
    }
}