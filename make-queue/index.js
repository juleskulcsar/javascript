//Queue is an abstract data structure, somewhat similar to Stacks. 
//Unlike stacks, a queue is open at both its ends. 
//One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). 
//Queue follows First-In-First-Out methodology (FIFO), i.e., the data item stored first will be accessed first.

//we'll use classes and an array to create a queue data structure 
//it will contain two methods: to add elements and remove elements


class Queue {
    constructor() {
      //we'll store our data structure in an array
      this.dataArray = [];
    }
    //to add elememts we'll use the unshift array method
    add(val) {
      this.dataArray.unshift(val);
    }
    //to remove elements we'll use the pop array method
    remove() {
      return this.dataArray.pop();
    }
  }
  
  module.exports = Queue;