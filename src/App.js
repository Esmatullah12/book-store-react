import { Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './components/Book';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" elemen={<Book />} t />
        <Route path="/categories" elemen={<Book />} t />
      </Routes>
    </>
  );
}

export default App;
