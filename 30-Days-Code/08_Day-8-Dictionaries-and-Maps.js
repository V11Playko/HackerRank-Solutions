    //Enter your code here
    input = input.split("\n");

    let inputs = parseInt(input[0]);

    let map = new Map();
    for (let i = 1; i <= inputs; i++) {
        // Set: The Set object allows you to store single values of any type, whether they are primitive values or object references.
        map.set(input[i].split(" ")[0], input[i].split(" ")[1])
    }

    // console.log(map)

    for (let j = inputs + 1; j < input.length; j++) {
        // Get: Binds the property of an object to a function that will be called when the property is fetched.
        if (map.get(input[j]) != undefined) {
            console.log(input[j] + "=" + map.get(input[j]));
        } else {
            console.log("Not found");
        }
    }