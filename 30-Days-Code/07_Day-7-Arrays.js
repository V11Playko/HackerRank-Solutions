function main() {
    var n = parseInt(readLine());
    let arr = readLine().split(' ');
    arr = arr.map(Number);
    var printOut = '';
    for (var i = arr.length -1; i >= 0; i--){
        printOut = printOut + String(arr[i]) + ' ';
    }
    // Slice: The slice() method returns a copy of a part of the array into a new array from start to end (end not included). The original array will not be modified.
    printOut = printOut.slice(0, printOut.length -1);
    console.log(printOut);

}