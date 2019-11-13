//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (num) => {
  var arr,arr1,total=[]
  arr=num.toString()
  arr1=arr.split("")
  arr=arr1.reverse()
  // console.log(arr)
  for(let i=0;i<arr.length;i++){
    // console.log("arr[i]", typeof arr[i])
    switch(arr[i]){
      case "1":
          if(i==0){
            total.push("I")
          }
          if(i==1){
            total.push("X")
          }
          if(i==2){
            total.push("C")
          }
          if(i==3){
            total.push("M")
          }
          break
      case "2":
          if(i==0){
            total.push("II")
          }
          if(i==1){
            total.push("XX")
          }
          if(i==2){
            total.push("CC")
          }
          if(i==3){
            total.push("MM")
          }
          break
      case "3":
          if(i==0){
            total.push("III")
          }
          if(i==1){
            total.push("XXX")
          }
          if(i==2){
            total.push("CCC")
          }
          if(i==3){
            total.push("MMM")
          }
          break
      case "4":
          if(i==0){
            total.push("IV")
          }
          if(i==1){
            total.push("XL")
          }
          if(i==2){
            total.push("CD")
          }
          break
      case "5":
          if(i==0){
            total.push("V")
          }
          if(i==1){
            total.push("L")
          }
          if(i==2){
            total.push("D")
          }
          break
      case "6":
          if(i==0){
            total.push("VI")
          }
          if(i==1){
            total.push("LX")
          }
          if(i==2){
            total.push("DC")
          }
          break 
      case "7":
          if(i==0){
            total.push("VII")
          }
          if(i==1){
            total.push("LXX")
          }
          if(i==2){
            total.push("DCC")
          }
          break
      case "8":
          if(i==0){
            total.push("VIII")
          }
          if(i==1){
            total.push("LXXX")
          }
          if(i==2){
            total.push("DCCC")
          }
          break
      case "9":
          if(i==0){
            total.push("IX")
          }
          if(i==1){
            total.push("XC")
          }
          if(i==2){
            total.push("CM")
          }
          break
      case "0":
          break
    }
  }
  arr1=total.reverse()
  return arr1.join("")
};
