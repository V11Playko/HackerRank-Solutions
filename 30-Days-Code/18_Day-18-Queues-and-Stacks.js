function Solution(){
    //Write your code here
    
    let stack = [];
    let queue = [];
    // this: the value of this is determined by how the function is called. It cannot be set by an assignment at runtime, and can be different each time the function is called.
    this.pushCharacter = (n) => {
        stack.push(n);
    }
    this.popCharacter = () => {
        return stack.pop();
    }
    
    this.enqueueCharacter = (n) => {
        queue.push(n)
    }
    this.dequeueCharacter = () => {
        return queue.shift();
    }
  
  }