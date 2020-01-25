//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (string, array) => {
  let arr=[], x,y
  
  for(let i=0;i<array.length;i++){
    // console.log(array[i].length)
    if(string.length==array[i].length){
     y=string.toLowerCase()
     x=array[i].toLowerCase()
     if(y!=x){
     y=y.split("").sort()
     x=x.split("").sort()
     if(y.toString()==x.toString()){
      // console.log(y.sort(), x.sort())
      arr.push(array[i])}
    }
  }
}
return arr
}
