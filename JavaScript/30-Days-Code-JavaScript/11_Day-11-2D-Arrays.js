function main() {
    var arr = [];
    for(var arr_i = 0;arr_i < 6; arr_i++){
        // readLine: The Readline module does what it says on the box: it reads a line of input from the terminal.
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    /* row i, column j
     * 1 1 1
     * 1 1 1
     * 1 1 1 
     */
    var arrs = []
    for (var i = 1; i < arr.length - 1;i++){
        for (var j = 1; j < arr[i].length - 1; j++){
            var sum = 0;
            // top
            sum = parseInt(arr[i-1][j-1]) + parseInt(arr[i-1][j]) + parseInt(arr[i-1][j+1]);
            // middle
            sum = sum + parseInt(arr[i][j]);
            // bottom
            sum = sum + parseInt(arr[i+1][j-1]) + parseInt(arr[i+1][j]) + parseInt(arr[i+1][j+1]);
            arrs.push(sum);
        }
    }
    //console.log(arrs);
    console.log(Math.max.apply(null, arrs));

}
