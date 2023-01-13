import { Player } from "./Player"
import { Board } from "./Board"
import { PieceX,PieceO } from "./Piece"
const prompt = require('prompt-sync')();

export class TicTacGame {
    private players: Player[]
    private board: Board
    constructor( size = 3) {
        const xpiece = new PieceX();
        const opiece = new PieceO();
        this.players = [new Player(xpiece),new Player(opiece)];
        this.board = new Board(size);
    }

    startGame(){
        let winner = null;
        while(!winner){
            const playerTurn = this.players.shift();
            this.board.print();
            if(!playerTurn){
                console.log('no players exist');
                winner = 'tie';
                continue;
            }
            this.players.push(playerTurn);
            if(!this.board.getFreeCells()){
                winner = 'tie';
                continue;
            }
            const pos = prompt(`enter new pos player ${playerTurn.id}: `);
            const [x,y] = pos.split(',');
            const posAddStatus = this.board.addPiece(x,y,playerTurn);
            if(!posAddStatus){
                this.players.unshift(playerTurn);
                continue;
            }
            const isWinner = this.board.getWinner(x,y,playerTurn);
            if(isWinner){
                winner = playerTurn;
            }
        }

        console.log('winner is ',winner);
    }

}