//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(str) {
    this.arr=[]
    this.flag=0
    let check
    // console.log(str)
    // str=parseInt(str)
    // str=str.toString()
    str=str.split(" ").join("")
    // str=str.replace(" ","")
    // str=str.replace(" ","")
    // console.log(str)
    // str=str.toString()
    console.log(str)
    if(str.length==1){
      this.flag=1
    }
   
    for(let i =0 ; i< str.length ; i++){
      check = str[i]
      if(parseInt(check)!=NaN){
        this.arr.push(parseInt(check))
      }else{
        this.flag = 1
      }

    }
  }

  get valid() {
    let x
    let total = 0
    if(this.flag==0){
        for(let i=0;i<this.arr.length;i++){
          if(this.arr[i]==0){
            i=-1
          }
        if(i%2==0){
          x=this.arr[i]*2
          if(x>9){
            x-=9
          }
          total+=x
        }
      }
      // console.log(this.arr)
      if(total%10==0){return true}
      else {return false}
    }

    else{return false}
  }
}
