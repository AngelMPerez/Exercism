//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(numb) {
    this.allergie=[]
    for(let i=7;i>=0;i--){
      // console.log(Math.pow(2,i))
      if(numb-Math.pow(2,i)>=0){
        this.allergie.push(i)
        numb-=2^i
      }
    }
  }

  list() {
    let array = []
    this.allergie
  }

  allergicTo() {
    
  }
}
