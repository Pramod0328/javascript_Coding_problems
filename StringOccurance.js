//16. Given a string, write a JavaScript function to count the occurrences of each character in the string.
function stringOcc(str) {
    const counts = {};

    for (let char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(stringOcc("Pramo dacharya"));
