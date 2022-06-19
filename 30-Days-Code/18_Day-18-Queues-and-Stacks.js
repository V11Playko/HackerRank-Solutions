function Solution(){
    //Write your code here
    
    let stack = [];
    let queue = [];
    // this: the value of this is determined by how the function is called. It cannot be set by an assignment at runtime, and can be different each time the function is called.
    this.pushCharacter = (n) => {
        // push: The push() method adds one or more elements to the end of an array and returns the new length of the array.
        stack.push(n);
    }
    this.popCharacter = () => {
        // pop: The pop() method removes the last element from an array and returns it. This method changes the length of the array.
        return stack.pop();
    }
    
    this.enqueueCharacter = (n) => {
        queue.push(n)
    }
    this.dequeueCharacter = () => {
        return queue.shift();
    }
  
  }