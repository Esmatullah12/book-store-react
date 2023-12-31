import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/bookAsyncActions';
import styles from './styles/Form.module.css';

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
    <div>
      <div className={styles.container}>
        <h3>Add a New Book</h3>
        <form>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <select
              className={styles.dropdown}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="category1">Fiction</option>
              <option value="category2">Roman</option>
              <option value="category3">Novel</option>
              <option value="category3">Non-Fiction</option>
            </select>

          </div>
          <button type="button" onClick={handleSubmit}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
