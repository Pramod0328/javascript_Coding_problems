//18. Write a JavaScript function that sorts an array of strings in ascending order.

let string = ['c','s','w','u','a','r','b'];

function StringAscending(string){
    return string.sort((a,b)=>a.localeCompare(b));
}

console.log(StringAscending(string));


function bubbleSortStrings(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j].localeCompare(arr[j + 1]) > 0) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


const strings = ["banana", "apple", "cherry", "date"];
const sortedStrings = bubbleSortStrings(strings);
console.log(sortedStrings); 
