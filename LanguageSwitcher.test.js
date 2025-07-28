import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../i18n';

test('switches language from English to Spanish', () => {
  render(<LanguageSwitcher />);
  const select = screen.getByLabelText(/language/i);
  fireEvent.change(select, { target: { value: 'es' } });
  expect(select.value).toBe('es');
});