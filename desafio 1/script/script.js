function fibonacciSequence (element) { {
    let a = 0;
    let b = 1;
    
    if (element === 0 || element === 1) {
        return `O número ${element} pertence à sequência de Fibonacci.`;
    }
    
    while (b < element) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    if (b === element) {
        return `O número ${element} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${element} não pertence à sequência de Fibonacci.`;
    }
    }
};

const element = 34;
console.log(fibonacciSequence(element));