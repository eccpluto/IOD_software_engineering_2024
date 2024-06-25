class logger {
    constructor() {
        this.id = Math.random();
    }
    log(callerID, message) {
        console.log(`[${callerID}] : ${message}`);
    }
}

module.exports = logger;