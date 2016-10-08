function vowelTest(s) {
  return (/^[aeiou]$/i).test(s);
}

function pigLatin(string){
  if(/\d/.test(string))return null;//tests if there is a number in the string

  var arr = string.toLowerCase().split('');

  if(vowelTest(arr[0])) return arr.join('')+'way';

  var i = 0;
  while(!vowelTest(arr[0])){
    if(i === arr.length) return arr.join('')+'ay'
    var ender = arr.splice(0,1);
    arr.push(ender);
    i++;
  }
  return arr.join('')+'ay';
}
