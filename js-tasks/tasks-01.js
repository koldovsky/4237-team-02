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
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals = 0, copaDelReyGoals = 0, championsLeagueGoals = 0) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

