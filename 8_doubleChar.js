function doubleChar(str) {
  var arr = [];
  for(var i = 0; i < str.length; i++){
    arr.push(str[i]);
    arr.push(str[i]);
  }
  return arr.join('');
}
