import React from 'react';
import { useTranslation } from 'react-i18next';
import { formatDate, formatCurrency } from '../utils/formatters';

const BookMeta = ({ publishedDate, price }) => {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <div>
      <p>{formatDate(publishedDate, locale)}</p>
      <p>{formatCurrency(price, locale)}</p>
    </div>
  );
};

export default BookMeta;
