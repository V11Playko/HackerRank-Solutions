

var queue = [root];
while (queue.length > 0) {
  var node = queue.shift();
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