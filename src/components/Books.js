import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Books = () => (
  <div className="list-form-section">
    <BookList />
    <BookForm />
  </div>
);

export default Books;
