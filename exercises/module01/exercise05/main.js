// this array has 5 elements
let breedsOfCamel = [
    "Bactrian",
    "Arabian",
    "Wild Bactrian",
    "Guanaco",
    "Vicuna",
];
// console.log(breedsOfCamel);

// note that positions = index+1
breedsOfCamel[0] = "Alpaca";
breedsOfCamel[3] = "Llama";
// console.log(breedsOfCamel);

// add a new element to the start of the array
breedsOfCamel.unshift("New Variant X");
// console.log(breedsOfCamel);

// remove element from the end of the array
breedsOfCamel.pop();

// print the final array
// console.log(breedsOfCamel);
