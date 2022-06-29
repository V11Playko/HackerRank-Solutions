    function processData(input) {
        //Enter your code here
        // Split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
        input = input.split("\n");
    
        for (let i = 1; i < input.length; i++) {
            let split = input[i].split("");
    
    
            var even = "";
            var odd = "";
    
    
    // Length: The length property of a String object represents the length of a string, in units of UTF-16 encoding.
            for (let j = 0; j < split.length; j++) {
                if (j % 2 == 0) {
                    even += split[j];
                } else {
                    odd += split[j];
                }
            }
    
            console.log(even + " " + odd);
        }
    
    }