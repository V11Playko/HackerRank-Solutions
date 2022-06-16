// toString: Returns a string representing the object.
var n = parseInt(readLine()).toString(2);
    var splits = n.split('0');
    console.log(splits.map(function(elem)
    {return elem.length;})
    // reduce: The reduce() method executes a reducer function on each element of an array, returning a single value as a result.
    .reduce(function(a,b){
        if (a>b) return a; else return b;}));

    