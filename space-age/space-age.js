//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (x,y) => {
var z =0;
switch(`${x}`){
  case "mercury":
    z= y / (0.2408467*60*60*24*365.25);
    break;
  case "venus":
    z= y / (0.61519726*60*60*24*365.25);
    break;
  case "earth":
    z= y / (1*60*60*24*365.25);
    break;
  case "mars":
    z= y / (1.8808158*60*60*24*365.25);
    break;
  case "jupiter":
    z= y / (11.862615*60*60*24*365.25);
    break;
  case "saturn":
    z= y / (29.447498*60*60*24*365.25);
    break;
  case "uranus":
    z= y / (84.016846*60*60*24*365.25);
    break;
  case "neptune":
    z= y / (164.79132*60*60*24*365.25);
    break;
}
  
   return parseFloat(z.toFixed(2));

};
