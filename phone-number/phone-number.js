//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (string) => {
  let numb=''
  for(let i=0;i<string.length;i++){
    if(string[i]==='0'||string[i]==1||string[i]==2||string[i]==3||string[i]==4||string[i]==5||string[i]==6||string[i]==7||string[i]==8||string[i]==9){
      numb+=string[i]
    }
    if(string[i]!=' '||string[i]!='('||string[i]!=')'||string[i]!='+'||string[i]!='-'){

    }
  }
  if(numb.length<10){
    throw 'Incorrect number of digits'
  }
  if(numb.length>11){
    throw 'More than 11 digits'
  }
  if(numb.length==11&&numb[0]!=1){
    throw '11 digits must start with 1'
  }
 
  return numb
};
