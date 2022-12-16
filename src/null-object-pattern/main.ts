import { VehicleFactory } from "./VehicleFactory";


export function main() {
    const vehicleFactory = new VehicleFactory();
    const v1 = vehicleFactory.getVehicle(1000000);
    const v2 = vehicleFactory.getVehicle(90000);
    const v3 = vehicleFactory.getVehicle(10000);
    console.log(v1.constructor.name,'v1 vehicle price',v1.getPrice());
    console.log(v2.constructor.name,'v2 vehicle price',v2.getPrice());
    console.log(v3.constructor.name,'v3 vehicle price',v3.getPrice());
}