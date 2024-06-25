function factorail(num){
    if(num===0 || num===1){
        return 1;
    }else{
        return num*factorail(num-1);
    }
}

console.log(factorail(5));