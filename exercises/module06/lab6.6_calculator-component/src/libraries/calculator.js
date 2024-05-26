import logger from './logger';
const myLogger = new logger();

class calculator {
    constructor() {
        // millisecond-unique identifier
        this.id = Math.random();
    }

    // public methods
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the sum of x and y
     */
    add(x, y) {
        myLogger.log(this.id, `adding ${x} and ${y}`);
        return x + y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the subtractive difference x - y
     */
    subtract(x, y) {
        myLogger.log(this.id, `subtracting ${x} and ${y}`);
        return x - y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the multiplicative product x * y
     */
    multiply(x, y) {
        myLogger.log(this.id, `multiplying ${x} and ${y}`);
        return x * y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the result of dividing x / y
     */
    divide(x, y) {
        myLogger.log(this.id, `dividing ${x} and ${y}`);
        return x / y;
    }
}

export default calculator;