function findOutlier(integers){
var evens = [];
var odds = [];
  for(var i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0)evens.push(integers[i]);
    else odds.push(integers[i]);
  }
  if(evens.length < odds.length) return evens[0];
  return odds[0];
}
