enum PieceType{
    X = 'X',
    O = 'O'
}
class Piece{
    pieceType: PieceType | undefined
    constructor(type?: PieceType){
        this.pieceType= type
    }
}

class PieceX extends Piece{
    constructor(){
        super(PieceType.X)
    }
}

class PieceO extends Piece{
    constructor(){
        super(PieceType.O)
    }
}

export{
    Piece,
    PieceX,
    PieceO
}
/**
 * more pieces can be extended using the Piece base class
 */