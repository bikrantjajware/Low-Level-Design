import {Board} from './board';
import {Dices} from './dices';
import {Player} from './player';

export class Game{
    board: Board
    players: Player[]
    winner ?: Player | null
    dices: Dices;

    constructor(size:number,snakes:number,ladders:number){
        this.board = new Board(size,snakes,ladders);
        this.players = [new Player(),new Player()];
        this.dices = new Dices(1);
        this.winner = null;
    }

    start(){

        while(!this.winner){

            const playerTurn = this.getPlayerTurn()
            //new position
            let newPos = null;
            while(!newPos || newPos >= this.board.size*this.board.size){

                //roll dice playerturn
                const moves = this.dices.roll();
                //get new position
                newPos = playerTurn.position + moves;
            }
            
            //check if winning position
            if(this.board.isWinningPosition(newPos)){
                this.winner = playerTurn;   
            }
            //check if jump exists
            const jumpCell = this.board.getCell(newPos);
            if(jumpCell.jump){

                //update new position
                console.log(`jump by ${jumpCell.jump.start < jumpCell.jump.end ?  'ladder' : 'snake'} `);
                newPos = jumpCell.jump.end;
            }
            console.log('new pos ', newPos);
            playerTurn.position = newPos;

        }

        console.log('winner is player',this.winner);
    }
    getPlayerTurn(){
        const playerTurn = this.players[0];
        console.log(`player turn ${playerTurn.id} || current pos ${playerTurn.position}`);
        this.players.push(this.players[0]);
        this.players.shift();
        return playerTurn;
    }

}