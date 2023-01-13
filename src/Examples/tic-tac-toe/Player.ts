import { Piece } from "./Piece";

export class Player{
    id: number;
    piece: Piece | undefined;
    static counter: number = 1;
    constructor(piece?:Piece){
        this.piece = piece;
        this.id = Player.counter++;
    }
}

