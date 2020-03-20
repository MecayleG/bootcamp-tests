// var reg = ["DC 55 YU GP","DV 23 LP CY","CY189-012 ND"];
var reg = "DC 55 YU GP"
var town = "GP"

var regCheck = function(reg, town){
  var result = reg.endsWith(town);
     return result;
};