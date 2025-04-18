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
