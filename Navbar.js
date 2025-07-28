import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t('title')}</li>
        <li>{t('addBook')}</li>
        <li>{t('language')}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
