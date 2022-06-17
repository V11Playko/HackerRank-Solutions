

this.insert=function(head,data){
    //complete this method
    var newNode = new Node(data);

    if (head === null || typeof head === 'undefined') {
        head = newNode;  
    } else if (head.next === null) {
        head.next = newNode;
    } else {
        var next = head.next;
        while(next.next) {
            next = next.next
        }
        next.next = newNode;
    }
    
    return head;
};