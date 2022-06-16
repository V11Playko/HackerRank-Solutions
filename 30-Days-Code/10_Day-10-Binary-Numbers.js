var n = parseInt(readLine()).toString(2);
    var splits = n.split('0');
    console.log(splits.map(function(elem)
    {return elem.length;})
    .reduce(function(a,b){
        if (a>b) return a; else return b;}));

    