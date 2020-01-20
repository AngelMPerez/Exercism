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
        return this.queens
    }

    toString() {
        
    }

    canAttack() {
        throw new Error("Remove this statement and implement this function");
    }
}