import { useState, useEffect } from "react";
// Renders a digital time that updates every second
function Clock() {
    console.log("component entered")
    const [date, setDate] = useState(new Date());
    useEffect(() => { // first arg is usually an arrow function
        let clockInterval = setInterval(() => tick(), 1000);
        console.log('Clock component mounted');

        // return value (a function) us called when the
        // component is unmounted and is usually used
        // for cleanup
        return () => {
            console.log('Clock component unmounted');
            clearInterval(clockInterval);
        }


    }, []); // second arg is an array of dependencies
    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
    };
    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}

function ClockDisplay() {
    const [showClock, setShowClock] = useState(false);
    // note ticking still continues when the clock
    // is toggled off - by adding an interval reference
    // and clearning it in the useEffect hook in Clock,
    // we have removed the background ticking
    const toggleClock = () => {
        setShowClock(!showClock);
    }
    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}
export default ClockDisplay;
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// response: removing the dependency array causes the
// useEffect hook to run on every re-render, causing
// message double ups

// ++ Why do the console messages appear double?

// log messages logged twice due to
// react strict mode being enabled.

// note that although the component is re-rendered, the useEffect
// hook isn't called each time, due to the secondary array arg
