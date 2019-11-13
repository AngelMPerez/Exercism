//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.obj={}
  }
  roster() {
    const Obj1=JSON.parse(JSON.stringify(this.obj))
    let aux1=Object.keys(Obj1)
   for(let i=0;i<aux1.length;i++){
    Obj1[aux1[i]].sort()
  }
    return Obj1
  }

  add(n,g) {
    // this.obj.g=n
    let arr=[]
    if (!this.obj[g]){
      arr.push(n)
      this.obj[g]=arr
    }
    else{
      this.obj[g].push(n)
    }

  }

  grade(x) {
    let aux=[]
    const Obj1=JSON.parse(JSON.stringify(this.obj))
    if(!Obj1[x]){
      return aux
    }else{
    return Obj1[x].sort()
  }}
}
