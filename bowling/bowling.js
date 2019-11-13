//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var counter=0
var total=0
var aux1=0
var aux2=0
var top=21

export class Bowling {
  roll(num) {
    if (num<0 || num>10){
    }
    else{
    this.score(num)
    }
  }

  score(num) {
    counter+=1
    if(counter>=top){counter=0;}

    switch(counter){
      case 1:
        total=num
        aux1=num
        break
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
      case 12:
      case 14:
      case 16:
      case 18:
      // case 20:
        if(aux1==10){top-=1}
        // if(aux1==10){total+=num*2}
        if(aux1+aux2==10||aux1==10||aux2==10){ total += num*2}
        else{total+=num}
        aux2=num
        break
      case 3:
      case 5:
      case 7:
      case 9:
      case 11:
      case 13:
      case 15:
      case 17:
        if(aux1==10||aux2==10){top-=1}
        if(aux1+aux2==10||aux1==10||aux2==10){ total += num*2}
        else{total+=num}
        aux1=num
        break
      case 19:
        // if(aux1==10||aux2==10){top-=1}
        if(aux1+aux2==10||aux1==10||aux2==10){ total += num*2}
        else{total+=num}
        aux1=num
        break
      case 20:
          if(aux1+num==10){top+=1}
          if(aux1+aux2==10||aux1==10||aux2==10){ total += num*2}
          else{total+=num}
          aux2=num
          break 
      case 21:
          total+=num
          // top=21
          break     
    }
    return total
  }
}
