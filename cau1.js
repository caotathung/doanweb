function getPrimesSuperFast(m, n) {
  
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = m; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
}

function getPrimes() {
  
  var a = Number(document.getElementById("num1").value);
  var b = Number(document.getElementById("num2").value);
  var result = getPrimesSuperFast(a, b);
  document.getElementById("res").value = result;
}