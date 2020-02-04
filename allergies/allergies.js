//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(numb) {
    this.allergie={
      arr:[],
      index:[]
    }
    for(let i=7;i>=0;i--){
      // console.log(Math.pow(2,i))
      if(numb-Math.pow(2,i)>=0){
        this.allergie.index.push(i)
        numb-=Math.pow(2,i)
      }
    }
    console.log(this.allergie.index)
  }

  list() {
    let array = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats']
    for(let i=0,j=0;i<this.allergie.index.length;i++){
      if(j==this.allergie.index[i]){
        this.allergie.arr.push(array[i])
        j=-1
      }
      j++
    }
    console.log(this.allergie.arr)
    return this.allergie.arr
  }

  allergicTo(string) {
    this.list()
    console.log(this.allergie.arr)
    for(let i=0;i<this.allergie.arr.length;i++){
      if(string==this.allergie.arr[i]){
        return true
      }
    }
    return false
  }
}
