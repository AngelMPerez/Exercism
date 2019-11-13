//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (x) => {

  let aux=[];
  let n=x
  for(let i=0;i<n[0].length;i++){
    aux.push(n[i])
    aux[i]=[];
    for(let j=0;j<n.length;j++){
      aux[i][j]=n[j][i];
    }
  }
  return aux

};
