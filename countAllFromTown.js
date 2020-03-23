function countAllFromTown(count){
  var towns = count.split(",")
  var isEqual = [];
  for(var i = 0; i < towns.length; i++){
    var from = towns[i];
    if(from.startsWith("CL")){
      isEqual.push(from)
    }
  }
  return isEqual.length
}