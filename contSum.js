/*jshint esversion: 6*/

module.exports = (array, integer) => {
  for (let i = 0; i < array.length; i++) {
    let iter = i;
    let num = array[i];
    while(num < integer) {
      iter ++;
      num += array[iter];
    }
    if (num === integer) {
      return true;
    }
  }
  return false;
};