//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    let CoinRev = coinArray.reverse()
    let arr=[]
    // console.log(CoinRev)
    if(target < 0){
      throw 'Negative totals are not allowed.'
    }
    if(target < CoinRev[CoinRev.length-1]){
      throw 'The total 3 cannot be represented in the given currency.'
    }
    
    for(let i=0;i<CoinRev.length;i++){
      if(target>=CoinRev[i]){
        arr.push(CoinRev[i]);
        target-=CoinRev[i]
        i=-1
      }
    }
    return arr.reverse()
  }
}
