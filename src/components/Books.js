import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const onDelete = (bookId) => {
  console.log(`Delete book with ID ${bookId}`);
};

const Books = () => (
  <div>
    <BookList onDelete={onDelete} />
    <BookForm />
  </div>
);

export default Books;
