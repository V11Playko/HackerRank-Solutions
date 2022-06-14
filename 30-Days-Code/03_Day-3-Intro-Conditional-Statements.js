function main() {
    // Converts (parses) an argument of type string and returns an integer of the specified base.
    var N = parseInt(readLine().trim(), 10);
    
if (N % 2 === 0) {
    if (N >= 2 && N <= 5) {
            console.log("Not Weird");
        } else if (N >= 6 && N <= 20) {
            console.log("Weird");
        } else if (N > 20) {
            console.log("Not Weird");
        }
} else if ( N % 2 === 1) 
    console.log("Weird");

}