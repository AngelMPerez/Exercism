//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor(obj) {
        this.queens={
            black : [7,3],
            white : [0,3] 
        }
        if(obj){
            this.queens={
                black : obj.black,
                white : obj.white
            }
        }
        if(this.queens.black===this.queens.white){
            throw ("Queens cannot share the same space");
        }
        // return this.queens
    }

    toString() {
        let string =""
        let st = ['_','_','_','_','_','_','_','_']
        let board = [st,st,st,st,st,st,st,st]
        // board[this.queens.black[0]][this.queens.black[1]] = "B"
        // board[this.queens.white[0]][this.queens.white[1]] = "W"    
        // board=board.slice(',')
        string= board.join('\n')
        // console.log(board.join('\n').slice(',')) 
    return string
    }

    canAttack() {
        throw new Error("Remove this statement and implement this function");
    }
}