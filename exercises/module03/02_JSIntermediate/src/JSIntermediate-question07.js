/**
 * Use the following array of book objects to practice the array functions
 * for map, find and filter. Test each of your answers using the provided books array:
 */

// provided array:
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a)
/**
 * 
 * @param {Number} bookId 
 * @returns The title of the book matching the bookId if found. Otherwise undefined.
 */
function getBookTitle(bookId) {
    return books.find(book => book.id == bookId).title;
}

// test getBookTitle
console.log(getBookTitle(4));
console.log(getBookTitle(2));

// b)
/**
 * 
 * @returns Array of books published before 1950.
 */
function getOldBooks() {
    return books.filter(book => book.year < 1950);
};

// test getOldBooks
console.log(getOldBooks());

// c)
/**
 * @description Adds a new property 'genre' to books objects
 * with default value 'classic'.
 */
function addGenre() {
    books.map(book => book.genre = 'classic');
}

// test addGenre
addGenre();
console.log(books);

// d)
/**
 * 
 * @param {String} authorInitial
 * @returns array of titles of books by authors whose initials start with authorInitial
 */
function getTitles(authorInitial) {
    // remove case sensitivity
    authorInitial = authorInitial.toUpperCase();
    // collect book objects in array that meet condition
    let result = books.filter(book => book.author.startsWith(authorInitial));
    // restructure resulting objects to only contain the titles
    return result.map(book => book.title);
}

console.log(getTitles('A'));
console.log(getTitles('a')); // case insensitive
console.log(getTitles('j'));

// e)
/**
 * @description returns the latest book object from books. Uses find and forEach internally.
 * @returns latest book.
 */
function latestBook() {
    // get a book object to test against
    let mostRecentBook = books.find(book => book.year);
    books.forEach(book => {
        if (mostRecentBook.year < book.year) {
            mostRecentBook = book;
        }
    });
    return mostRecentBook;
}
//test
console.log(latestBook());