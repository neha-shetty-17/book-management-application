import React from 'react';
import { useTranslation } from 'react-i18next';

const AddBookForm = () => {
  const { t } = useTranslation();

  return (
    <form>
      <h2>{t('addBook')}</h2>

      <label>{t('bookTitle')}</label>
      <input type="text" name="title" />

      <label>{t('author')}</label>
      <input type="text" name="author" />

      <button type="submit">{t('submit')}</button>
    </form>
  );
};

export default AddBookForm;
