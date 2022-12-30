export class Player{
    id: number
    position: number
    static idCount :number = 0
    constructor(){
        this.position = 0;
        this.id = Player.idCount++;
    }
}