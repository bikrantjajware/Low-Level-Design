import { NormalDriveStrategy } from "./DriveStrategy";
import { Vehicle } from "./vechicle";

export class NormalVehicle extends Vehicle{
    constructor(){
        super(new NormalDriveStrategy());
    }
}