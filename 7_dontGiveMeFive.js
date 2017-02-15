//This function will take the start number to the end number and count the difference excluding anything that includes a 5

function dontGiveMeFive(start, end){
  let count = 0;
  for(let i = start; i <= end; i++){
    if(!i.toString().match(/5/))count++;
  }
  return count;
}
