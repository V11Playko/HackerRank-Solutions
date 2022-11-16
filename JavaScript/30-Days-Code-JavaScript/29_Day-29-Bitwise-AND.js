function main() {
    // readLine: The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        // split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var k = parseInt(n_temp[1]);
        function findMaxPoss(arr) {
            var res = 0;
            // length: The length property of a String object represents the length of a string, in units of UTF-16 encoding.
            for(var i = 0; i < arr.length; i++){
                for(var j = i + 1; j < arr.length; j++){
                    var ans = arr[i] & arr[j];
                    if((ans > res) && (ans < k)){
                        res = ans;
                    }
                }
            }
            return res;
        }
        console.log(findMaxPoss(range(n)));
    }
    function range(n){
        return Array.apply(null, Array(n)).map(function (_, i) {return i + 1;});
    }
}