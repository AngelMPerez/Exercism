//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(numb) {
    this.allergie=[]//array with the number of the allergies
    while(numb>256){
      numb=numb-256
    }
    for(let i=7;i>=0;i--){
      if(numb-Math.pow(2,i)>=0){
        this.allergie.push(i)
        numb-=Math.pow(2,i)
      }
    }
  }

  list() {
    let array = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats']
    let array2 = []//list with the allergies of the person
    for(let i=0;i<this.allergie.length;i++){
      array2.unshift(array[this.allergie[i]])
    }
    return array2
  }

  allergicTo(string) {
    let arr=this.list()//this needs the array of allergies to see if the person is allergic to something
    for(let i=0;i<arr.length;i++){
      if(string==arr[i]){
        return true
      }
    }
    return false
  }
}
