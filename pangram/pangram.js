//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (x) => {
var y = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var t=0;
for(var i=0;i<y.length; i++){

  var r=0; 
  for(var j=0;j<x.length; j++){
    if(y[i]===x[j].toLowerCase()){
        r+=1;
      }
    }
    if(r==0){
      t+=1;
    }
  }
   return Boolean(!t);
};
