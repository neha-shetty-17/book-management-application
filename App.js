import React from 'react';
import { useTranslation } from 'react-i18next';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  const { t } = useTranslation();

  const books = [
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'The Alchemist', author: 'Paulo Coelho' }
  ];

  return (
    <div>
      <Navbar />
      <HomePage />
      <AddBookForm />
      <BookList books={books} />
    </div>
  );
};

export default App;
