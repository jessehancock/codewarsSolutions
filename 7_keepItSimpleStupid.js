function isKiss( words ){
  var arr = words.split(' ');
  var length = arr.length;
  for(var i = 0; i < length; i++){
    if(arr[i].length > length) return "Keep It Simple Stupid"
  }
  return "Good work Joe!"
}
ouch
