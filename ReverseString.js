function reverseString(str) {
    // const reverseStr = str.split('').reverse().join('');
    // return reverseStr;

    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

console.log(reverseString("hello")); // Output: "olleh"
