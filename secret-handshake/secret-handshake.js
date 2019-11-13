//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const secretHandshake = (num) => {
  let bin=""
  for(;num>0;){
    bin = bin+num%2
    num/=2
  }
  bin=bin.split("")
  let bin2=bin.reduce((accum,curr)=>{curr+accum;},"")
return bin2
};
