function main() {
    var n = parseInt(readLine());
    // split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
    var a = readLine().split(' ');
    // map: The map() method creates a new array with the results of the call to the indicated function applied to each of its elements.
    a = a.map(Number);
    var totalNum = 0
    for (var i = 0; i < a.length; i++) {
        var numberOfSwaps = 0
        for (var j = 0; j < a.length -1; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j+1];
                a[j+1] = a[j];
                a[j] = temp;
                numberOfSwaps++;
            }
        }
        totalNum += numberOfSwaps;
        if (numberOfSwaps == 0) {
            break;
        }
    }
    console.log('Array is sorted in '+totalNum+ ' swaps.')
    console.log('First Element: '+a[0]);
    console.log('Last Element: '+a[a.length-1]);
}