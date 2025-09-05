function hello(name) {
    alert(`Привет ${name}`)
}
console.log(hello('Alex'))

const randomNumbers = [1, 14, 5, 23, 5, 10]

function more10(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(`This number ${array[i]} > 10`)
        }
    }
}

more10(randomNumbers)

let result=null

function calculate(firstNumber, secondNumber, operation) {
    if (operation == 'minus') {
        return firstNumber - secondNumber
    }
    else if ( operation == 'plus'){
        return  firstNumber + secondNumber
    }
    else if ( operation == 'multiplication'){
        return  firstNumber * secondNumber
    }
    else if ( operation == 'division'){
        return  firstNumber / secondNumber
    }
}

console.log(calculate(2,3,'division'))

