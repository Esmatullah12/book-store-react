import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/bookAsyncActions';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newBook = {
      itemId: Date.now(),
      title,
      category,
      author,
    };
    dispatch(addBookAsync(newBook));
    setCategory('');
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => (setCategory(e.target.value))}
      />
      <button type="submit" onClick={handleSubmit}>Add Book</button>
    </form>
  );
};

export default BookForm;
