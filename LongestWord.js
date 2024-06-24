function FindLongestWord(sentence){
    const words = sentence.split(' ');
    let longestWord = '';

    for(let word of words){
        if(word.length>longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(FindLongestWord('this is my fird classmate'));