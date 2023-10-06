import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BlTIwZp3z9NYtJhv3dq4/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const repsonse = await axios.get(baseUrl);
    const res = repsonse.data;
    if (res === '') return [];
    const arrayOfItems = Object.keys(res).map((key) => {
      const item = res[key][0];
      return {
        itemId: key,
        author: item.author,
        title: item.title,
        category: item.category,
      };
    });
    return arrayOfItems;
  } catch (error) {
    return rejectWithValue('Faild to load the data');
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    const res = await axios.post(baseUrl, newBook);
    if (res.status === 201) {
      return newBook;
    }
    return rejectWithValue('fail to add book');
  } catch (error) {
    return rejectWithValue('fail to add book');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`${baseUrl}/${itemId}`);
    if (res.status === 201) {
      return itemId;
    }
    return rejectWithValue('fail to remove the book');
  } catch (error) {
    return rejectWithValue('fail to remove the book');
  }
});
