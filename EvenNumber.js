function evenNumber(arr){
    let evenArr = []
    let index =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenArr[index] = arr[i];
            index++;
            // evenArr.push(arr[i]);
        }
    }
    return evenArr;

}

console.log(evenNumber([1,2,3,4,5,6]))