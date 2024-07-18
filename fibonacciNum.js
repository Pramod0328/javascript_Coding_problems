//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonaci(num){
    if(num<=1) return num;

    return  fibonaci(num-1)+fibonaci(num-2);
}

console.log(fibonaci(10));
