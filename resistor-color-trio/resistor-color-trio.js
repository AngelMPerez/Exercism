//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var x = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

export class ResistorColorTrio {
  constructor(array) {
    this.arr =array
  }

  label() {
    let value = '',unit = "ohms"
    let m, f = 0 // m -> multiplicator f-> flag
    for(let i=0, j=0; j<2 && f<9 ;i++){
       if(this.arr[2]==x[i]){
        m = i
      }
      if(this.arr[j]==x[i]){
        value += i
        j++
        f = 0
        i = -1
      }
      else{
        f++
      }
    }
    for(let i=0; i<m; i++){
      value*= 10
    }
    if(value > 1000){
      // console.log(this.value)
      unit = "kiloohms"
      value = value/1000
    }
    if(f<this.arr.length){return (`Resistor value: ${value} ${unit}`)}
    else{throw '/invalid color/'}
  }
  
}
