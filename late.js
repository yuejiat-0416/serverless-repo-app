// start coding your function here!
function running_late(date) {
  d = new Date(date);
  if (d.getHours() === 8){
    return "It is still early!";
  }
  else if(d.getHours() === 23 && d.getMinutes() == 30){
    return "It is late!";
  }
}


exports.running_late = running_late;
