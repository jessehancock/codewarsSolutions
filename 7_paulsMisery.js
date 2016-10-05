function paul(x){
  var ms = 0;
  for(var i = 0; i < x.length; i++){
    if(x[i] === 'eating') ms += 1;
    else if(x[i] === 'kata') ms += 5;
    else if(x[i] === 'Petes kata') ms += 10;
  }
  if(ms < 40) return 'Super happy!';
  else if(ms < 70) return 'Happy!';
  else if(ms < 100) return 'Sad!';
  else return 'Miserable!';
}
