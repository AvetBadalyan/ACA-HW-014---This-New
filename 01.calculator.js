/* 
Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers.
const calculator = new Calculator();
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.multiply(10, 5);
calculator.divide(10, 5);
*/

class Calculator {
    add (number1, number2) {
        return number1 + number2
    }

    subtract (number1, number2){
        return number1 - number2
    }

    multiply(number1, number2){
        return number1 * number2
    }

    divide(number1, number2) {
        return number1 / number2
    }
}

const calculator = new Calculator();

console.log(calculator.add(10, 5), 
calculator.subtract(10, 5) , 
calculator.multiply(10, 5), 
calculator.divide(10, 5));


