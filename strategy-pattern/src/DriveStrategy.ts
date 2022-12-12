export interface DriveStrategy{
    drive : () => void
}

export class NormalDriveStrategy implements DriveStrategy {

    drive () {
        // implement normal drive strategy
        console.log('normal drive strategy')
    }
}

 export class SpecialDriveStrategy implements DriveStrategy {

    drive () {
        console.log('special drive strategy')
        // implement special drive strategy
    }
}