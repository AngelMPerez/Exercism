//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let arr=[]
  if (num==1 || num==0){//if number is 1 or 0, arr should be empty
    return arr
  }
  else{
    for(let prime=2;prime<=num;prime++){//prime start at 2 because is the first prime number
      if((num%prime)===0){
        arr.push(prime)
        num=num/prime // the number needs to be divided for the next loop
        prime=1 //when the condition in true the prime needs to be return to 1, that way when it go out the if, increment to 2
      }
    }
    return arr
  }
  
};
