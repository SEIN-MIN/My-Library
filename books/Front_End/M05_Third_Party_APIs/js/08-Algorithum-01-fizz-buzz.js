var fizzBuzz = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];
    
        if (currentNumber % 15 === 0) {
          console.log("Fizz Buzz");
        } else if (currentNumber % 3 === 0) {
          console.log("Fizz");
        } else if (currentNumber % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(currentNumber);
        }
      }
};