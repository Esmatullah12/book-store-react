import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksData: [
    {
      item_id: '1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: '2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: '3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.booksData = [...state.booksData, newBook];
    },
    removeBook: (state, action) => {
      const bookItemIdRemove = action.payload;
      state.booksData = state.booksData.filter((book) => book.item_id !== bookItemIdRemove);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
