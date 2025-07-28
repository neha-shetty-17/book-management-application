import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('welcomeMessage')}</p>
    </div>
  );
};

export default HomePage;
