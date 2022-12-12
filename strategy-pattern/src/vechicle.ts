import {DriveStrategy } from './DriveStrategy'

export class Vehicle{
    strategy: DriveStrategy;

    // assigning strategy by constructor injection
    constructor(strategy:DriveStrategy){
        this.strategy = strategy
    }

    drive(){
        console.log('driving');
        this.strategy.drive()
    }
}