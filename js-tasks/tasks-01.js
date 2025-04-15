//Valeriia Remyha
 //https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
 
 function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
 }
 
 //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 
 function makeNegative(num) {
   if (num < 0) {
     return num;
   } else {
     return num * -1;
   }
 }
 
 //https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
 
 function move(position, roll) {
   return roll * 2 + position;
 }
 
 //https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 function greet(name, owner) {
   if (name === owner) {
     return "Hello boss";
   } else {
     return "Hello guest";
   }
 }
 //End Valeriia Remyha
 
 
 
 // Lekhiv Oleh
 
 //https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
 }
 
 //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 function makeNegative(num) {
   return -Math.abs(num);
 }
 
 //https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
 function move (position, roll) {
   return position + 2 * roll;
 }
 
 //https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 function greet (name, owner) {
   return `Hello ${name === owner ? "boss" : "guest"}`
 }
 
 //https://www.codewars.com/kata/keep-hydrated-1/train/javascript
 function litres(time) {
   return Math.floor(time/2);
 }
 
 //https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 function lovefunc(flower1, flower2){
   return (flower1 + flower2) % 2 === 1 ? true : false ;
 }
 
 // Lekhiv Oleh End
 
 // Pavlo Naichuk
 
 //https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
 function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
 }
 
 //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 function makeNegative(num) {
   return num > 0 ? -num : num;
 }
 
 //https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
 function move(position, roll) {
   return position + roll * 2;
 }
 
 //https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 function greet(name, owner) {
   return name === owner ? "Hello boss" : "Hello guest";
 }
 
 //https://www.codewars.com/kata/keep-hydrated-1/train/javascript
 function litres(time) {
   return (time * 0.5) | 0;
 }
 
 //https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 function lovefunc(flower1, flower2) {
   return flower1 % 2 !== flower2 % 2;
 }
 
 //Pavlo Nauchuk
 
 
 // Oleh Pidhaietskiy
 //https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
 function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   let sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
   return +sum;
 }
 
 //https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 function makeNegative(num) {
   if(num > 0){
     return -num;
   }
   else if(num <= 0){
     return num;
   }
 }
 
 //https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
 function move (position, roll) {
   position = position + (roll * 2);
   return +position;
 }
 
 //https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
 function greet (name, owner) {
   if(name === owner){
     return 'Hello boss'
   }
   else{
     return 'Hello guest'
   }
 }
 
 //https://www.codewars.com/kata/keep-hydrated-1/train/javascript
 function litres(time) {
   return Math.floor(time / 2);
 }
 
 // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 function lovefunc(flower1, flower2){
   return (flower1 + flower2) % 2 === 1;
 }

 //Artem Nykyforuk
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals = 0, copaDelReyGoals = 0, championsLeagueGoals = 0) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

