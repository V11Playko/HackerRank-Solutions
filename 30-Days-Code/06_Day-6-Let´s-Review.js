function processData(input) {
    // Split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
    const inputs = input.split('\n');

    // Length: The length property of a String object represents the length of a string, in units of UTF-16 encoding.
    if (!inputs || inputs.length < 2) {
        return;
    }

    const [testCases, ...stringsToCheck] = inputs;

    if (testCases < 1 || testCases > 10) {
        return;
    }

    for (const stringToCheck of stringsToCheck) {
        if (!stringToCheck || stringToCheck.length < 2 || stringToCheck.length > 10000) {
            continue;
        }

        const isEven = num => num % 2 ? false : true;
        let evenGroup = '';
        let oddGroup = '';

        stringToCheck
            .split('')
            // forEach: The forEach() method executes the indicated function once for each element of the array.
            .forEach((letter, index) => {
                if (isEven(index)) {
                    evenGroup += letter;
                } else {
                    oddGroup += letter;
                }
            });

        console.log(`${evenGroup} ${oddGroup}`);
    }
}