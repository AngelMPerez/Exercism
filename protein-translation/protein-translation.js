//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (string) => {
  let help,protein=[]
  if(string){
  for(let i=0;i<string.length;i+=3){
    help=`${string[i]}${string[i+1]}${string[i+2]}`//cut the string in seccions of 3
    switch(help){
      case 'AUG': protein.push('Methionine')
                  break;
      case 'UUC':
      case 'UUU': protein.push('Phenylalanine')
                  break;
      case 'UUA':
      case 'UUG': protein.push('Leucine')
                  break;
      case 'UCC':
      case 'UCU':
      case 'UCA':
      case 'UCG': protein.push('Serine')
                  break;
      case 'UGU':
      case 'UGC': protein.push('Cysteine')
                  break;
      case 'UAU':
      case 'UAC': protein.push('Tyrosine')
                    break;
      case 'UGG': protein.push('Tryptophan')
                  break;
      case 'UAA':
      case 'UAG':
      case 'UGA': return protein 
      default: throw 'Invalid codon'   
    }
  }
}  
return protein
};
