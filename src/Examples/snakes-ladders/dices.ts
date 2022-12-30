export class Dices{
    private count: number 
    constructor(noOfDices:number){
        this.count = noOfDices;
    }

    roll():number{
        let diceSum = 0;
        let diceCount = this.count;
        while(diceCount--){
            diceSum += Math.floor(Math.random()*6+1)
        }
        return diceSum;
    }
}