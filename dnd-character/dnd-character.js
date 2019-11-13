//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (num) => {
  if(num<3){
    throw "Ability scores must be at least 3"
  }else if(num>18){
    throw "Ability scores can be at most 18"}
  else{
  return Math.floor((num-10)/2)
  }
};

export class Character {
  constructor(){
    this.character1 = {}
  }
  static rollAbility() {
    let rol = (Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6));
    // console.log(rol)
    return (rol)
    
  }

  get strength() {
    // let str = this.character1.rollAbility
    let str = Character.rollAbility()

    // console.log("str" , typeof str)
    return str
    // return (Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6))
  }

  get dexterity() {
    return Character.rollAbility()
    // return (Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6))
  }

  get constitution() {
    const x=Character.rollAbility()
    return x
    // return (Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6)+Math.ceil(Math.random()*6))
  }

  get intelligence() {    
    return Character.rollAbility()
    // return (Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7))
  }

  get wisdom() {
    return Character.rollAbility()
    // return (Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7))
  }

  get charisma() {
    return Character.rollAbility() 
       // return (Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7)+Math.ceil(Math.random()*7))
  }

  get hitpoints() {
    return (10+abilityModifier(this.constitution))
    // console.log(abilityModifier(this.constitution) + 10)
  }
}
