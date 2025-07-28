export const formatDate = (date, locale) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export const formatCurrency = (value, locale) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale === 'es' ? 'EUR' : 'USD',
  }).format(value);