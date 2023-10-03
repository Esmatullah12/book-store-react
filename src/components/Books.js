import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const booksArray = [
  { id: 1, title: 'TED Talks', author: 'Chris Anderson' },
  { id: 2, title: 'Homo Deus', author: 'Noah Harari' },
  { id: 3, title: 'Factfulness', author: 'Hans Rosling' },
  { id: 4, title: 'Kite Runner', author: 'Khalid Hassani' },
];

const onDelete = (bookId) => {
  console.log(`Delete book with ID ${bookId}`);
};

const Books = () => (
  <di>
    <BookList books={booksArray} onDelete={onDelete} />
    <BookForm />
  </di>
);

export default Books;
