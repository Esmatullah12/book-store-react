import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/bookAsyncActions';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    itemId, title, author, category,
  } = book;

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div key={itemId}>
      <h2>{title}</h2>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
