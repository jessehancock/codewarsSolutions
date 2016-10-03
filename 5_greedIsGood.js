function score( dice ) {
 var score = 0;
 var diceObj = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0};

  for(var i =0; i <= dice.length; i++){
    if(dice[i] === 1) diceObj.one = diceObj.one + 1
    else if(dice[i] === 2) diceObj.two = diceObj.two + 1
    else if(dice[i] === 3) diceObj.three = diceObj.three + 1
    else if(dice[i] === 4) diceObj.four = diceObj.four + 1
    else if(dice[i] === 5) diceObj.five = diceObj.five + 1
    else diceObj.six = diceObj.six + 1
  }

  if(diceObj.one === 3) score += 1000;
  if(diceObj.one === 4) score += 1100;
  if(diceObj.six >= 3) score += 600;
  if(diceObj.five >= 3) score += 500;
  if(diceObj.four >= 3) score += 400;
  if(diceObj.three >= 3) score += 300;
  if(diceObj.two >= 3) score += 200;
  if(diceObj.one === 1) score += 100;
  if(diceObj.one === 2) score += 200;
  if(diceObj.five === 1) score += 50;
  if(diceObj.five === 2) score += 100;

  return score;
}
