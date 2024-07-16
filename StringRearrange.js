//Given two strings. Find if one string can be formed by rearranging the letters of the other string.

function stringArr(str1,str2){
    if(str1.lenght!==str2.lenght){
        return false;
    }

    const sortString = (str)=>str.split('').sort().join('');

    return sortString(str1)===sortString(str2);
}

console.log(stringArr('sos','sos'));