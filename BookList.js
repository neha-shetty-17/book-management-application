import React from 'react';
import { useTranslation } from 'react-i18next';

const BookList = ({ books = [] }) => {
  const { t } = useTranslation();

  if (books.length === 0) {
    return <p>{t('noBooks')}</p>;
  }

  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>
          <strong>{book.title}</strong> - {book.author}
          <button>{t('delete')}</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
