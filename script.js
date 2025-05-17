const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// DESTRUCTURING //////////----------------------------------------------------------------
const books = getBook(3);
books;
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  books; //for object
title;

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);
const [primaryGenre, secondaryGenre] = genres; //for arrays
console.log(primaryGenre, secondaryGenre);

----------------------------------------------------------------------------------------------------
// REST & SPREAD //
const [primaryGenre1, secondaryGenre1, ...otherGenre] = genres; //for arrays
otherGenre;

// const newGenres = [genres , 'epic fantacy'];
const newGenres = [...genres, "epic fantacy"];
newGenres;

const updatedBook = {
  ...books,
  moviePublicationDate: "2001-03-12",
  //overwriting existing property
  pages: 1200,
};
updatedBook;

----------------------------------------------------------------------------------------------------
// TEMPLATE LITERALS // ES-6 Feature - using expression - will get a single value
const getYear = (str) => str.split("-")[0];
const summary = `${title} a book with ${pages} long book, written by ${author} and published on ${getYear(
  publicationDate
)}. The book has${hasMovieAdaptation ? "" : " not"} been adopted as a movie.`;
summary;

----------------------------------------------------------------------------------------------------
// TERINERY OPERATOR : to define a variable conditionally
const pagesRange = pages > 1000 ? "greater than a thousand" : "less than 1000";
pagesRange;

----------------------------------------------------------------------------------------------------
// ARROW FUNCTION // a single line modern way using => automatic return
// function getYear(str){
//   return str.split('-')[0]
// }
// function expression
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate));

----------------------------------------------------------------------------------------------------
// SHORT CIRCUITING // will return first value if condition is satisfied and not look at second value, and return second value if first value doesn't satisy - second value will be returned even if it to does not satisfy condition
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has movie adptation");

// FALSY VALUES = 0, ' ',undefined,null
console.log(true || "some string");
console.log(false || "some string");

const spanishTranslation = books.translations.spanish || "Not Translated";
console.log(spanishTranslation);

// NULLISHCOLISENCE - for zero and empty will return first value
// const count = books.reviews.librarything.reviewsCount ?? 'NO data';
// console.log(count);
// const countRev = books.reviews.librarything.reviewsCount || 'NO data';
// console.log(countRev);

----------------------------------------------------------------------------------------------------
// OPTIONAL CHAINING // - using multiple methods/ inbuild functions on a same output
function getTotalReviewCount(book) {
  // const librarythings = book.reviews.librarything.reviewsCount; //here for book 3 we will get undefined because there is no review count in book 3
  const librarythings = book.reviews.librarything?.reviewsCount ?? 0; //here ?. checks if the value exists if not it will not caryy forward on the chain
  librarythings;
  const goodread = book.reviews.goodreads.reviewsCount;
  return librarythings + goodread;
}
console.log(getTotalReviewCount(books));


----------------------------------------------------------------------------------------------------
// ARRAY METHODS = MAP, FILTER, REDUCE = returns new array based on he array passed and original array is not mutated.

// MAP - will perform operation on each value and return a result that is stored ina new array
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2); //el = current element in array - for each number in x multiply the number by 2 and store the result in array
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

function getTotalReviewCount(book) {
  const librarythings = book.reviews.librarything?.reviewsCount ?? 0;
  const goodread = book.reviews.goodreads.reviewsCount;
  return librarythings + goodread;
}

const essentials = books.map((book) => ({
  //returning an object with just title & author from books using () to prevent writing return and {}
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentials);

// ARRAY FILTER = filter baased on true/false - we can also chain on one filter because it will return an array and we can use filter on array
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

// includes returns true/false
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// ARRAY REDUCE - most versatile - reduce the array to single value, starter value is the starting value of the final value we want
// accumilator = strater value of the final value we want
// want to know total pages from all books
const pagesToRead = books.reduce((acc, book) => acc + book.pages, 0); //acc = 0 in first iteration
pagesToRead;

// ARRAY SORT - to sort an array in assending or descending order - this will mutate original array - to prevent this we need to copy the array first and then sort
const arr = [2, 5, 1, 4, 8, 9];
// const sorted = arr.sort((a, b) => a - b);
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;
// sorting books array by pages desc order
const sortByPages = books.slice().sort((a, b) => b.pages - a.pages); //here a and b are books in books object.
sortByPages;

// ARRAY MANUPULATIONS - without changing original array
// 1. ADD Book - add new book with id =6
const newBook = {
  id: 6,
  title: "Harry Poter and the Chamber of Secrets",
  author: "J. K. Rowlings",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. DELETE  Book - remove book with id 3
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3. UPDATE Book - update pages on book 1
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// ASYNCHRONOUS JAVASCRIPT
// PROMISE - .then tells what to do with the data we got from fetch
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("Raghava");

// ASYNC AWAIT
const getTodos = async function () {
  //async getTodos()
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
};

getTodos();
