//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(x) {
    var y=x.split("\n")
     this.m=[];
    for(let i=0; i<y.length;i++){
      this.m[i]=y[i].split(" ")
      for(let j=0; j<this.m[i].length;j++){
        this.m[i][j]=parseInt(this.m[i][j])
      }  
    }
    
  }

  get rows() {
    return this.m
  }
  get columns() {
    let aux=[];
    let n=this.m
    for(let i=0;i<n[0].length;i++){
      aux.push(n[i])
      aux[i]=[];
      for(let j=0;j<n.length;j++){
        aux[i][j]=n[j][i];
      }
    }
    return aux
  }
}

