function toInitials(name) {
  name = name.split(' ');
  var returnVal = [];
  for(var i = 0; i < name.length; i++){
    returnVal.push(name[i][0]+'.')
  }
  return returnVal.join(' ');
}
