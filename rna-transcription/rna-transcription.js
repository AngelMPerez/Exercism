//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (x) => {
var r="";
  if (x==""){
    return x;
  } 
else {
  for(var i =0; i<x.length; i++){
    switch(`${x[i]}`){
      case "A":
        r+="U";
        break;
      case "G":
        r+="C";
        break;
      case "C":
        r+="G";
        break;
      case "T":
        r+="A";
        break;
      }
    }
    return r;
  }
};
