// this: the value of this is determined by how the function is called. It cannot be set by an assignment at run time, and can be different each time the function is called.

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this

this.insert=function(head,data){
    //complete this method
    var newNode = new Node(data);

    // typeOf: The typeof operator returns a string indicating the type of the operand without evaluating it.
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof
    if (head === null || typeof head === 'undefined') {
        head = newNode;  
    } else if (head.next === null) {
        head.next = newNode;
    } else {
        var next = head.next;
        // while: Creates a loop that executes a specified statement as long as a certain condition evaluates to true. This condition is evaluated before executing the statement.
        while(next.next) {
            next = next.next
        }
        next.next = newNode;
    }
    
    return head;
};