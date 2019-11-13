import { arrayExpression } from "@babel/types"

//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class List{

  constructor(x) {
    this.Head = null
    if(x!=null){  // if the element is null, the constructor create an empty List
      for(let i=0;i<x.length;i++){
        this.add(new Element(x[i])) // if not, it add to the List, when the List is created
      }
    }
  }
//add elements to the head
  add(nextValue) {
    let current 
    if(this.Head == null){  // if the Head is empty, the Head is the first element
      this.Head = nextValue
    }
    else{  
      current = this.Head // current grab the element in the Head so it doesn't get lost, and put it in the end of the list
      this.Head = nextValue
      this.Head.next = current
    }
  }

  get length() {
    let aux= this.Head
    let count = 0 
      // console.log(aux.node)
      while(aux != null && aux.node != null){ // counts how many elements are in the List
        // console.log(aux.next)
          count +=1
          aux = aux.next
      }      
      return count
  }

  get head() {
  return this.Head 
  }

  toArray() {
    let arr=[]
    let aux = this.Head
    while(aux != null && aux.node != null){ // goes throug the List and put each element in the array
      // console.log(aux.next)
        arr.push(aux.node)
        aux = aux.next
    } 
    return arr
  }

  reverse() {
    let Rev= new List() 
    let Aux = this.Head
    while(Aux != null ){  // goes throug the first List and add each element in the new List. the Add method, add to the Head
      Rev.add(new Element(Aux.node))
      Aux=Aux.next
    }
    return Rev
  }

}

export class Element{
  constructor(x){
    this.node=x
    this.next=null
  }
  get value(){
    return this.node
  }
   next(){
    return this.next
  }

}
