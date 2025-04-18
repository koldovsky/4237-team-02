//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return -Math.abs(num);
}

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + 2 * roll;
}

//https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet(name, owner) {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return (time * 0.5) | 0;
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

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