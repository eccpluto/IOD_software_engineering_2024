class calculator {
    constructor() {
        // millisecond-unique identifier
        this.id = Date.now();
    }

    // public methods
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the sum of x and y
     */
    add(x, y) {
        return x + y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the subtractive difference x - y
     */
    subtract(x, y) {
        return x - y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the multiplicative product x * y
     */
    multiply(x, y) {
        return x * y;
    };

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns the result of dividing x / y
     */
    divide(x, y) {
        return x / y;
    }
}

module.exports = calculator;