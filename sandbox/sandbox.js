// let someVar = "hello";
// someVar = Number(someVar);
// console.log(someVar)

// let float1 = 0.1;
// let float2 = 0.2;
// console.log(float1.toPrecision(18));
// console.log(float2.toPrecision(18));

// console.log(float1 + float2);


function PrintMe(msg) {
    console.log(msg);
}

let timerID = setTimeout(PrintMe, 1, "Asynchronously printed message");

let time = performance.now()

console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");
console.log("synchronous code");



console.log(`time taken: ${performance.now() - time}`) 

/* (DR) time taken prints ~5 milliseconds, but asynchronous timer was 1 ms..
 * this indicates setTimout delay is not started until the synchronous calls above execute
 */