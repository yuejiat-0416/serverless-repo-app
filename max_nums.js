// start coding your function here!
function find_max(arr) {
  let arr_length = arr.length;
  let max_num = Number.NEGATIVE_INFINITY;
  
  for (let i = 0; i < arr_length; i++){
    if (arr[i] > max_num) {
      max_num = arr[i];
    }
  }
    
  return max_num;
}

exports.find_max = find_max;
