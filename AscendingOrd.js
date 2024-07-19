//17. Write a JavaScript function that sorts an array of numbers in ascending order.

function ascendingOrder(arr){
    return arr.sort((a,b)=>a-b);
}

console.log(ascendingOrder([20,30,40,1,2,4,8]))


//using buble sort

let num = [1,5,3,2,1,6,9];

function bubbleSortAscending(num){
    let n = num.length;
    let swapped;

    do{
        swapped = false;
        for(let i=1;i<n;i++){
            if(num[i-1]>num[i]){
                let temp = num[i-1];
                num[i-1] = num[i];
                num[i] = temp;
                swapped = true 
            }
        }
        n--;

    }while(swapped);return num;
}

console.log(bubbleSortAscending(num));