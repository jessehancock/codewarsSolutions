function solution(number){
  var num = 0;
  for(var i = 1; i< number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      num = num + i;
    }
  }
return num;
}
