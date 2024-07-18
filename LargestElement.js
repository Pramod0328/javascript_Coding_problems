/*14. Write a JavaScript program to find the largest element in a nested array.
    - [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]*/

    const nestedArr = [[3,4,58],[709,9,4,[10,11]],[111,2]]
    function nestedArray(arr){
        const faltArray = arr.flat(Infinity);
        return Math.max(...faltArray);
    }


 
   

    console.log(nestedArray(nestedArr));