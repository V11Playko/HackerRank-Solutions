this.removeDuplicates=function(head){
    var prev = null;
    var current = head;
    var arr = [];
    while(current != null) {
        if(arr[arr.length - 1] != current.data) {
            arr.push(current.data);
        } else {
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
    console.log(arr.join(' '));
}