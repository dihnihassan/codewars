// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you

//   let newArray = [];

// for (let i = 0; i > arrayOfSheep.length; i++) {

//   if (arrayOfSheep.length[i] === "true") {
//     newArray.push(arrayOfSheep[i])
//   }
//   return newArray;
// }

return arrayOfSheep.filter(sheep => !!sheep).length

}