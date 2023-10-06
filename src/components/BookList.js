import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/bookAsyncActions';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.books);
  const error = useSelector((state) => state.books.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);
  let content;
  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book) => (
            <Book key={book.itemId || books.item_id || Date.now()} book={book} />
          ))}
        </ul>
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return content;
};

export default BookList;
