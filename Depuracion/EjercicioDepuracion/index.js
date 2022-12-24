function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

const nTerms = 6


    for(let i = 1; i <= nTerms; i++) {
        console.log(fibonacci(i));
}