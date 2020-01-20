//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (string1, string2) => {
  let count = 0
    if(string2.length==string1.length){
        for(let i=0;i<string1.length;i++){
        if(string1[i]!=string2[i]){
          count+=1
        }
      }
    }
    else{
    if(!string1){ throw 'left strand must not be empty'}
    
    if(!string2){ throw 'right strand must not be empty'}
    
    if(string1.length!=string2.length){ throw 'left and right strands must be of equal length'}
    }
  return count
};
