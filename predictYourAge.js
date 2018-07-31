
    // Take a list of ages when each of your great-grandparent died.
    // Multiply each number by itself.
    // Add them all together.
    // Take the square root of the result.
    // Divide by two.

    function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
      var age = 0
      var i = arguments.length;

      //this is 50% faster than a for loop
      while (i--) {
        let tempAge = arguments[i]*arguments[i];
        age = age + tempAge
      }
      return Math.floor(Math.sqrt(age)/2);
    }
