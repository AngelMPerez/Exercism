//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(string) {
    let A=0,G=0,T=0,C=0
    for(let i=0;i<string.length;i++){
      if(string[i]=='A'){
        A+=1
      }
      else if(string[i]=='G'){
        G+=1
      }
      else if(string[i]=='T'){
        T+=1
      }
      else if(string[i]=='C'){
        C+=1
      }
      else{
        throw ('Invalid nucleotide in strand')
      }
    }
    return (`${A} ${C} ${G} ${T}`)
  }
}
