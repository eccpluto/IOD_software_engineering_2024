/**
 * The following car object has several properties and a method which uses them to print a
 * description. When calling the function normally this works as expected, but using it from
 * within setTimeout fails. Why?
 */

let car = {
    make: 'Porsche',
    model: '911',
    year: 1964,

    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`)
    }
};

car.description(); // works

// The below code fails because,althought ```car.description``` is a reference to an object method, the use of
// ```this``` keyword loses it's context when called from setTimeout - which sets its own global context.
setTimeout(car.description, 200); // fails

// a) fixing the above code - we can capture the context by wrapping the method inside a function, and executing it
// inside this function wrapper. 
setTimeout(function () { car.description() }, 200);

// b) cloning and overriding the car object with a new value for year:

const carClone = { ...car };
carClone.year = 1963;
console.log(carClone);

// c) does the delayed description use the original or new values from b) and why?
// it uses the original values, car.description is a method of the car object. Since I cloned
// this and created a new object, and modified the year in the cloned object - the original property
// values of the car completely unaffected.

// d) use bind to fxix the description method so that it can be called from within setTimout without a wrapper function:

setTimeout(car.description.bind(car), 200);

// e) Change another property of car by creating a clone and overriding it, test that setTimout
// still uses the bound values from d)

const carClone2 = Object.assign({}, car);
carClone2.make = 'Hyundai';
// note this still uses the same context as d (repeating code here):
setTimeout(car.description.bind(car), 200);