//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(numb) {
    this.allergie=[]
    while(numb>256){numb=numb-256}
    for(let i=7;i>=0;i--){
      // console.log(Math.pow(2,i))
      if(numb-Math.pow(2,i)>=0){
        this.allergie.push(i)
        numb-=Math.pow(2,i)
      }
    }
    // console.log(this.allergie)
  }

  list() {
    let array = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats']
    let array2 = []
    for(let i=0;i<this.allergie.length;i++){
      array2.unshift(array[this.allergie[i]])
    }
    // console.log(array2)
    return array2
  }

  allergicTo(string) {
    let arr=this.list()
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
      if(string==arr[i]){
        return true
      }
    }
    return false
  }
}
