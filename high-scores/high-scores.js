//
// This is only a SKELETON file for the 'High-Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(x) {
   this.score=x
    // for(let i=0; i<x.length;i++){
    //   this.y[i]=x[i]; 
    // }
  }

  get scores() {
  return this.score
  }

  get latest() {
    return this.score[this.score.length - 1]
  }

  get personalBest() {
    let best;
    for(let i=0;i<this.score.length;i++){
      if(!best){
        best = this.score[i]
      }
      if(best<this.score[i]){
        best = this.score[i]
      }
    }
    return best
  }

  get personalTopThree() {
    let aux1=[]
    let a;
    for(let i=0; i<this.score.length;i++){
      for(let j=0;j<this.score.length;j++){
        if(this.score[i]>this.score[j]){
          a=this.score[i]
          this.score[i]=this.score[j]
          this.score[j]=a
        }
      }
    }
   
    for(let i=0;i<this.score.length && i<3;i++){
        aux1[i]=this.score[i]
      
    }
    return aux1
  }
}
