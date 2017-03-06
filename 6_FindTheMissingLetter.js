//Used the value of the letters to find the missing letter in the string.
// a, b, c, e, f => will return d

function findMissingLetter(array){
  const string = array.join('');
for(let i = 1; i < array.length; i++){
  if(string.charCodeAt(i) !== string.charCodeAt(i - 1) + 1) return String.fromCharCode(string.charCodeAt(i - 1) + 1);
}
  return ' ';
}
