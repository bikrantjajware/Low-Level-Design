import { Player } from './Player';
import {Piece} from './Piece';

export class Board{
    size: number
    playerCells: (Piece | undefined )[][];
    constructor(size: number ){
        this.size = size;
        this.playerCells =  [...Array(this.size)].map( () => [...new Array(this.size).fill(undefined)]);
    }

    print(){
        for(let row of this.playerCells)
        console.log(row.map( cell => cell?.pieceType || '__' ) );
        // console.log(row);
        // console.log(this.playerCells.map ( row =>  row.map( cell => cell?.pieceType || '__' )));
    }

    addPiece(row:number,col:number,player: Player){
        if(row < 0 || row >= this.size || col < 0 || col >= this.size)
            {
                console.log('position out of board');
                return false;
            }
        if(this.playerCells[row][col]){
            console.log('spot already marked');
            return false;
        }
        this.playerCells[row][col] = player.piece;
        return true;
    }

    getFreeCells(){
        for(let row=0;row< this.size;row++){
            for(let col=0;col< this.size;col++){
                if(!this.playerCells[row][col])
                return true;
            }
        }
        return false;
    }

    getWinner(x:number,y:number,player:Player){
        console.log({x,y,player});
        let row,col,d1 ,d2;
        row = col = d1 = d2 = true;
        for(let i=0;i<this.size;i++)
            if(this.playerCells[x][i] == null || this.playerCells[x][i] != player.piece)
                row = false;
        for(let i=0;i<this.size;i++)
            if(this.playerCells[i][y] == null || this.playerCells[i][y] != player.piece)
                col =  false;
        for(let i=0;i<this.size;i++)
            if(this.playerCells[i][i] == null || this.playerCells[i][i] != player.piece)
                d1 = false;                
        for(let i=0;i<this.size;i++)
            if(this.playerCells[i][this.size-i] == null || this.playerCells[i][this.size-i] != player.piece)
                d2 = false;                
        return row || col || d1 || d2;
    }
}
