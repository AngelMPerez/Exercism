import { threadId } from "worker_threads"

//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearch{
  constructor(array){
    this.array2 = array
  }

  get array() {
    this.array2 
    let arr
    let f=true
    for(let i=0; i<this.array2.length; i++){
      if(this.array2[i]>this.array2[i+1]){
        f=false
        break
      }
    }
    if(f){
      arr = this.array2
    }
    return arr
  }

  indexOf(item) {
    let top=this.array2.length
    let bottom=0
    let half
    let flag=false
    while((bottom<=top)&&!flag){
      half =Math.floor((bottom+top)/2)
      if(item==this.array2[half]){
        flag=true
      }
      else if(item<this.array2[half]){
          top = half-1
        }
      else{
          bottom = half+1
        }
      
      console.log(half)
    }
    if(flag){return half}
    else {return -1} 
  }
}
