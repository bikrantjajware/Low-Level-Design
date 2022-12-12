import { SpecialDriveStrategy } from './DriveStrategy';
import {Vehicle} from './vechicle';

export class SportsVehicle extends Vehicle{
    constructor(){
        super(new SpecialDriveStrategy())
    }

}