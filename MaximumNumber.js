//11. Write a JavaScript program to find the maximum number in an array.


let arr = [1,2,3,1,2,3,-1,4,0,3,7];

function maximumNumber(arr){
        if(arr.length===0){
            throw new Error("Array is Empty");
        }

        let max = arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;
}

console.log(maximumNumber(arr));