
let arr1 = [0,2,9,2,4];
let arr2 = [3,5,2,7,1];

function MergeSort(arr1,arr2){
    let mergedArr = [...arr1,...arr2];
    return mergedArr.sort();
}

console.log(MergeSort(arr1,arr2))