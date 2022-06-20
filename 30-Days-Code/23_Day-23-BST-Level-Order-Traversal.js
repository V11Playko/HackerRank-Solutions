// This is the simplest way I found to solve this algorithm, although there are many ways to solve the same algorithm

var queue = [root];
while (queue.length > 0) {
    // while: Creates a loop that executes a specified statement as long as a certain condition evaluates to true. This condition is evaluated before executing the statement.
  var node = queue.shift();
  // shift: The shift() method removes the first element from the array and returns it. This method modifies the length of the array.
  write(node.data + " ");
  if(node.left) {
   queue.push(node.left);
  }
  if (node.right) {
   queue.push(node.right);
  }
}
function write(str){
  process.stdout.write(str);
}