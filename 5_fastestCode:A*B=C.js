function findAB(numbers,c){
  if(c === 0){
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 0) return [numbers[0], 0]
    }
    return null
  }
  var values = numbers.filter((element) => c % element ===0);
  if(values.length < 2) return null;
  if(values.length === 2) return values;
  for(var i = 0; i < values.length -1; i++){
   for(var j = i+1; j < values.length; j++){
    if(values[i] * values[j] === c) return [values[i], values[j]];
    }
  }
  return null
}
