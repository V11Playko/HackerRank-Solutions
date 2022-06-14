function main() {
    // The trim() method removes whitespace at both ends of the string.
    const n = parseInt(readLine().trim(), 10);
    for(let i=1;i <= 10; i++){
        var result = n * i;
        console.log(`${n} x ${i} = ${result}`)
    }
}