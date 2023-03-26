// Given an array of integers, return a new array with each value doubled.

function maps(x) {
  let newArray = [];

  for(const map of x) {
    newArray.push(map * 2);
  }
  return newArray;
}