function PalindromeChack(Input){
    let Inputval = Input.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverseVal = Inputval.split('').reverse().join('');

    return Inputval === reverseVal;
}
console.log(PalindromeChack('cac'))