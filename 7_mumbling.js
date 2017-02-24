//A little bit longer than I wanted. I am not in love with the double for loop. 


function accum(s) {
  s = s.toUpperCase();
  var arr = [];
    for(var i = 0; i < s.length; i++){
        arr.push(s[i])
      for(var j = 0; j < i; j++){
        arr.push(s[i].toLowerCase())
      }
      arr.push('-');
    }
    arr.pop();
  return arr.join('');
}
