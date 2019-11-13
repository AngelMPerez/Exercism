//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (x) => {
  
  let s=0, y =parseInt(x);

  if(y==NaN || y<=0){
    throw "Classification is only possible for natural numbers.";
  }
  else{
    for(let i=0;i<y;i++){
      if(y%i==0){
        s+=i;
      }
    }
    if(s==y){
      return "perfect"
    }
    if(s>y){
      return "abundant"
    }
    if(s<y){
    return "deficient"
    }
  }
};
