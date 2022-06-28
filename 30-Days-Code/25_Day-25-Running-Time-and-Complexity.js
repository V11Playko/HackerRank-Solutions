function processData(input) {
    // split: The split() method splits an object of type String into an array (vector) of strings by separating the string into substrings.
    var arr = input.split('\n');
    // length: The length property of a String object represents the length of a string, in units of UTF-16 encoding.
    for (var i = 1; i < arr.length; i++){
      var n = arr[i];
      if(isPrime(n)){
          console.log("Prime");
      } else {
          console.log("Not prime");
      }
    }
  }
  
  function isPrime(n){
    if (n <= 1)  {
      return false;
    }
    if (n <= 3) {
      return true;
    }
  
    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n%2 == 0 || n%3 == 0){
      return false;
    }
  
    for (var index=5; index*index<=n; index=index+6){
      if (n%index == 0 || n%(index+2) == 0) {
        return false;
      }
    }
    return true;
  }