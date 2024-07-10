/*Create a function which will accept two arrays arr1 and arr2.
 The function should return true if every value in arr1 has its corresponding
  value squared in array2. The frequency of values must be the same.*/

  
function sameFrequency(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }

    let frequencyCount1 = {};
    let frequencyCount2 = {};

    for(let val of arr1){
        frequencyCount1[val] = (frequencyCount1[val]|| 0)+1;
    }

    for(let val of arr2){
        frequencyCount2[val] = (frequencyCount2[val]||0)+1;

    }

    for(let key in frequencyCount1){
        if(!(key ** 2 in frequencyCount2)){
            return false;
        }
        if(frequencyCount2[key**2]!==frequencyCount1[key]){
            return false;
        }
    }
    return true;
    
}


console.log(sameFrequency([1,2,3],[1,4,9]));