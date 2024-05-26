// controlled by Calculator

function CalculatorScreen(props) {
    return(
        <div className="CalculatorScreen">
            <input type="text" value={props.value} readOnly/>
        </div>
    )
}

export default CalculatorScreen