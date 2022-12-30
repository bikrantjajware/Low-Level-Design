import { Cell } from "./cell";
import { Jump } from "./jump";
export class Board{
    cells: Cell[][];
    size:number;
    constructor(size:number,snakes:number,ladders:number){
        this.size = size;
        this.cells = [...new Array(size)].map( i => [...new Array(size)].map(i => new Cell()) );
        this.addSnakesAnsLadders(snakes,ladders)
    }

    addSnakesAnsLadders(snakes: number,ladders: number){

        //add snakes =>  start  > end;
        while(snakes){
            const start = Math.floor(Math.random() * (this.size*this.size-1));
            const end = Math.floor(Math.random() * (this.size*this.size-1));
            if(start <= end || this.getCell(start).jump) continue;
            this.getCell(start).jump = new Jump(start,end);
            snakes--;
        }
        //add ladders =>  start  < end;
        while(ladders){
            const start = Math.floor(Math.random() * (this.size*this.size-1));
            const end = Math.floor(Math.random() * (this.size*this.size-1));
            if(start >= end || this.getCell(start).jump) continue;
            this.getCell(start).jump = new Jump(start,end);
            ladders--;
        }

    }
    getCell( pos:number){
        return this.cells[Math.floor(pos/this.size)][pos%this.size];
    }

    isWinningPosition(newPos: number){
        return newPos === this.size*this.size-1;
    }
}