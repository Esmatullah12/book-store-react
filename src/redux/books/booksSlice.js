import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIdRemove = action.payload;
      return state.filter((book) => book.id !== bookIdRemove);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
