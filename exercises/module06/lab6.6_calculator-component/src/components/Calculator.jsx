// child components
import CalculatorScreen from './CalculatorScreen'
import CalculatorKeypad from './CalculatorKeypad'
// react components
import { useState } from 'react';
// styling
import './Calculator.css'
// library for calculator logic
import calculator from '../libraries/calculator';
const myCalc = new calculator();

// Calculator is a parent component, uncontrolled


function Calculator() {

    // state management
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [operand, setOperand] = useState(null);

    // handlers which are passed as callbacks to the child components to get input
    const handleNumberClick = (number) => {
        console.log(`parent onClick called with value: ${number}`)
        if (displayValue == '0') {
            setDisplayValue(number)
        } else {
            setDisplayValue(displayValue + number);
        }
    }

    const handleOperatorClick = (value) => {
        console.log(`Operator entered: ${value}`)
        // only set an operator if we havent already
        switch (value) {
            case '+':
                setOperand(Number(displayValue));
                setOperator('+');
                setDisplayValue('0');
                break;

            case '-':
                setOperand(Number(displayValue));
                setOperator('-');
                setDisplayValue('0');
                break;

            case '/':
                setOperand(Number(displayValue));
                setOperator('/');
                setDisplayValue('0');
                break;

            case 'x':
                setOperand(Number(displayValue));
                setOperator('x');
                setDisplayValue('0');
                break;

            case '=':
                calculate();
                break;

            case 'C':
                reset();
                break;

            default:
                break;
        }
    }

    const calculate = () => {
        const operandB = Number(displayValue);
        let result = null;
        switch (operator) {
            case '+':
                result = myCalc.add(operand, operandB)
                setDisplayValue(String(result));
                setOperand(result);
                break;

            case '-':
                result = myCalc.subtract(operand, operandB)
                setDisplayValue(String(result));
                setOperand(result);
                break;

            case '/':
                result = myCalc.divide(operand, operandB)
                setDisplayValue(String(result));
                setOperand(result);
                break;

            case 'x':
                result = myCalc.multiply(operand, operandB)
                setDisplayValue(String(result));
                setOperand(result);
                break;

            default:
                break;
        }

        // we want to remove the operator and operand from the internal state
    }

    const reset = () => {
        setDisplayValue('0');
        setOperator(null);
        setOperand(null);
    }

    return (
        <div className="Calculator">
            <h3><i>Enter a binary operation, be sure to hit reset (C) to perform another operation!</i></h3>
            <CalculatorScreen value={displayValue} />
            <CalculatorKeypad handleNumberClick={handleNumberClick} handleOperatorClick={handleOperatorClick} />
        </div>
    )

}

export default Calculator