//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var x = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

export class ResistorColorTrio {
  constructor(array) {
    this.arr =array
    this.value = ''
    this.unit = "ohms"
  }

  label() {
    let y,f=0
    for(let i=0,j=0;j<2&&f<9;i++){
       if(this.arr[2]==x[i]){
        y=i
      }
      if(this.arr[j]==x[i]){
        this.value+=i
        j++
        f=0
        i=-1
        // console.log(this.value)
      }
      else{
        f++
      }
    }
    for(let i=0;i<y;i++){
      this.value*=10
    }
    if(this.value>1000){
      // console.log(this.value)
      this.unit="kiloohms"
      this.value=this.value/1000
    }
    if(f>=10){throw ("/invalid color/")}
    else{return (`Resistor value: ${this.value} ${this.unit}`)}
  }
  
}
