//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import BigInt from "./lib/big-integer";

export const square = (numb) => {
  let first = 1
  if(numb<=0 || numb>64){
    throw ('square must be between 1 and 64')
  }
  for(let i=0; i<numb-1; i++){
    first= first * 2
  }
  console.log(BigInt(first))
  return first.toString()
};

export const total = () => {
  throw new Error("Remove this statement and implement this function");
};
