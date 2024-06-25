function findMaxCountConsecutive(arr){
    let maxCount = 0;
    let currentCount = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===1){
            currentCount++;
            maxCount = Math.max(maxCount,currentCount);
        }else{
            currentCount = 0;
        }
    }
    return maxCount;
}

console.log(findMaxCountConsecutive([1,1,1,1,0,1,1,2,1,1,1]))