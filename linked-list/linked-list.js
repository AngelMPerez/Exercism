//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor(){
    this.head = null
  }
  push(item) {
    if(!this.head){
      this.head = new element(item)
    }
    else{
      this.head.next = new element(item)
    }
    // console.log(this.head.next)
  }

  pop() {
    let a 
    let x = this.head
    // console.log(x)
    if(this.head.next==null){
      a=this.head.value;
      this.head=null;
    }
    else if(this.head.next.next==null){
      a=this.head.next.value
      this.head.next=null
    }
    else{
      while(x.next.next!=null){
        x=x.next
        if(x.next.next==null){
          a=x.next.value
          x.next=null
        }
      }
    }
    // console.log(a)
    return(a)
  }

  shift() {
    let x=this.head
    this.head=this.head.next
    return(x.value)
  }

  unshift(item) {
    let x
    if(!this.head){
      this.head = new element(item)
    }
    else{
      x=this.head
      this.head = new element(item)
      this.head.next = x
    }
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    throw new Error("Remove this statement and implement this function");
  }
}
class element {
  constructor(item){
    this.value = item
    this.next = null
  }
}