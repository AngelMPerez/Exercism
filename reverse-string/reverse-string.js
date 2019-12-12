//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (input) => {
  let back = ''
  for(let i=0;i<input.length;i++){
    back=input[i]+back
  }
  return back
}
