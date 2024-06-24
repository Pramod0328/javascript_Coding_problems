// function RemoveDuplicate(arr){
    // const uniqueArray = [...new Set(arr)];
    // return uniqueArray;
//     }

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((accumulator, value) => {
  if (!accumulator.includes(value)) {
    accumulator.push(value);
  }
  return accumulator;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
