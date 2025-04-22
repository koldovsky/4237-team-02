//Lekhiv Oleh start

//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
const stringToArray = (string) => string.split(" ");

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (numbers) => Math.min(...numbers);

const max = (numbers) => Math.max(...numbers);

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(numbers, operation) {
  const minNumber = Math.min(...numbers);
  return operation === "value" ? minNumber : numbers.indexOf(minNumber);
}

//Lekhiv Oleh end

// Pavlo Naichuk start
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
let minNumberWithList = function (list) {
  return Math.min(...list);
};

let maxNumberWithList = function (list) {
  return Math.max(...list);
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  const minValue = Math.min(...arr);
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}

//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return 2 * (n - 1);
}

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  }
  return n - 1 - (n > 12 ? 1 : 0);
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// Pavlo Naichuk end

// Bohdan Pustovar start

//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  const words = string.split(" ");
  return words;
}

//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}

// https://www.codewars.com/kata/577a98a6ae28071780000989
var min = function (list) {
  list.sort((a, b) => a - b);

  return list[0];
};

var max1 = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0
function min(arr, toReturn) {
  if (toReturn === "value") {
    return arr.reduce((min, item) => (item < min ? (min = item) : min));
  }

  if (toReturn === "index") {
    const min = arr.reduce((min, item) => (item < min ? (min = item) : min));

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === min) {
        return i;
      }
    }
  }

  return 0;
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let diff = dadYearsOld - sonYearsOld;
  return sonYearsOld <= diff ? diff * 2 - dadYearsOld : dadYearsOld - diff * 2;
}

// https://www.codewars.com/kata/574b3b1599d8f897470018f6
function getRealFloor(n) {
  if (n < 13 && n > 0) {
    return n - 1;
  }

  if (n > 13 && n > 0) {
    return n - 2;
  }

  return n;
}

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
function past(h, m, s) {
  //#Happy Coding! ^_^
  return (h * 3600 + m * 60 + s) * 1000;
}

// https://www.codewars.com/kata/5545f109004975ea66000086
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
function nthEven(n) {
  // your code here
  return (n - 1) * 2;
}

// Bohdan Pustovar end


// Oleh Pidhaetskiy Start

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  } else if (toReturn === "index") {
    return arr.indexOf(minValue);
  }
}

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  // i will be an integer. Double it and return it.

  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Oleh Pidhaetskiy End