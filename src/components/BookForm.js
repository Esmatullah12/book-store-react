import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/bookAsyncActions';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const newBook = {
      item_id: uuidv4(),
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
    <>
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
    </>
  );
};

export default BookForm;
