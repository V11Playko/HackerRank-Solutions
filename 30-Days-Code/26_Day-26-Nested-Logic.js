function processData(input) {
    //Enter your code here
    // split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
    var inputArr = input.split('\n'),
        actual = inputArr[0].split(' '),
        expected = inputArr[1].split(' '),
        month = 1,
        day = 0,
        year = 2,
        fine = 0;
        
    if (actual[year] > expected[year]) {
        fine = 10000;
    } else if (actual[month] > expected[month]) {
        fine = 500 * (actual[month] - expected[month]);
    } else if (actual[day] > expected[day]) {
        fine = 15 * (actual[day] - expected[day]);
    }
    
    console.log(fine);
}