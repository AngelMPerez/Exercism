//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (x) => {
  let r="";
for( var i=0;i<2;i++){
switch(`${x[i]}`){
  case "black":
    r+= "0";
    break;
  case "brown":
    r+= "1";
    break;
  case "red":
    r+= "2";
    break;
  case "orange":
    r+= "3";
    break;
  case "yellow":
    r+= "4";
    break;
  case "green":
    r+= "5";
    break;
  case "blue":
    r+= "6";
    break;
  case "violet":
    r+= "7";
    break;
  case "grey":
    r+= "8";
    break;
  case "white":
    r+= "9";
    break;
}

}
 return parseInt(r);
};
