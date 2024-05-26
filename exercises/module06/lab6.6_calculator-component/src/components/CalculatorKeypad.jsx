// controlled by Calculator

function CalculatorKeypad(props) {

    // more specific on events, which call parent component handlers
    const onNumberClick = (number) => {
        props.handleNumberClick(number)
    }

    const onOperatorClick = (value) => {
        props.handleOperatorClick(value)
    }

    return(
        <div className="CalculatorKeypad">
            {/* this will be turned into a grid using css */}
            <button onClick={() => onNumberClick('1')}>1</button>
            <button onClick={() => onNumberClick('2')}>2</button>
            <button onClick={() => onNumberClick('3')}>3</button>
            <button onClick={() => onNumberClick('4')}>4</button>
            <button onClick={() => onNumberClick('5')}>5</button>
            <button onClick={() => onNumberClick('6')}>6</button>
            <button onClick={() => onNumberClick('7')}>7</button>
            <button onClick={() => onNumberClick('8')}>8</button>
            <button onClick={() => onNumberClick('9')}>9</button>
            <button onClick={() => onNumberClick('0')}>0</button>

            <button onClick={() => onOperatorClick('+')}>+</button>
            <button onClick={() => onOperatorClick('-')}>-</button>
            <button onClick={() => onOperatorClick('/')}>/</button>
            <button onClick={() => onOperatorClick('x')}>x</button>
            <button onClick={() => onOperatorClick('=')}>=</button>
            <button onClick={() => onOperatorClick('C')}>C</button>

        </div>
    )
}

export default CalculatorKeypad