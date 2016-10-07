function solution(string) {
  var arr = string.split('');
  for(var i = arr.length - 1; i > 1 ; i--)
  //looped backwards because of splice
  if(arr[i].match(/[A-Z]/)){
  //used regex
         arr.splice(i, 0, ' ');
   }
   return arr.join('');
}
