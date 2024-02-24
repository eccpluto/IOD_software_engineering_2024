// this JSON object represents a book record
const book = {
    "title": "Judge Me By My Cover",
    "description": "A book like no other.",
    "author": "Anonymous",
    "pages": "176",
};

// print the values of the book object to the console individually
console.log(book.title);
console.log(book.author);
console.log(book.description);
console.log(book.pages);

// print the entire object to the console
console.log(book);


book.description = "This book has some similaraties to other books and is not that unique.";

// check the updated description
// console.log(book);