// start coding your function here!
function running_late(date) {
  if (date.getHours() === 8){
    return "It is still early!";
  }
  else if(date.getHours() === 23 && date.getMinutes() == 30){
    return "It is late!";
  }
}


exports.running_late = running_late;
