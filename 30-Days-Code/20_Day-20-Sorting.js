function main() {
    var n = parseInt(readLine());
    var a = readLine().split(' ');
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