/*10. Write logic to get unique objects from below array?
- I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
- O/P: [{name: "sai"},{name:"Nang"},{name: "111111"}];
*/

function uniqueObject(arr){
    const seen = {};
    const uniqueArray = [];

    for(let i=0;i<arr.length;i++){
        const obj = arr[i];
        const key = JSON.stringify(obj);
         
        if(!seen[key]){
            seen[key]=true;
            uniqueArray.push(obj);
        }
    }
    return uniqueArray;

}

let arrval = [
    {name:'pramod'},
    {name:'sukesh'},
    {name: 'pramod'},
    {name:'sampath'},
    {name:'bhavish'},
    {name:'suresh'},
    {name:'bhavish'}
]
console.log(uniqueObject(arrval));

