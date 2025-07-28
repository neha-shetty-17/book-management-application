# book-management-application

### 📁 **Folder Structure**

├── day1/
│   └── src/
│       ├── locales/
│       ├── App.js
│       ├── i18n.js
│       └── index.js
├── day2/
│   ├── components/
│   │   ├── AddBookForm.js
│   │   ├── BookList.js
│   │   └── Navbar.js
│   ├── pages/
│   │   └── HomePage.js
│   └── App.js
├── day3/
│   ├── components/
│   │   └── BookMeta.js
│   └── utils/
│       └── formatters.js
├── day4/
│   └── src/components/
│       └── LanguageSwitcher.js
├── day5/
│   └── __tests__/
│       └── LanguageSwitcher.test.js
├── day6/
│   └── documentation.txt
├── day7/
│   └── deployment checks.txt
├── package-lock.json
└── node_modules/


# Multi-language UI Support - Book Management App

This project demonstrates a day-by-day implementation of multi-language support in a full-stack book management React application using `react-i18next`.

## Getting Started

Install dependencies:
npm install

Run development server:
npm start

Build for production:
npm run build

## Daily Breakdown

### Day 1: i18n Setup
- Installed and configured `react-i18next`.
- Added `i18n.js` setup in `day1/src/`.
- Created translation files under `src/locales/` for `en` and `kn`.

### Day 2: Replacing Static Text
- Replaced all hardcoded UI strings with `t('key')` function.
- Used `useTranslation` hook in components like `Navbar`, `BookList`, etc.

### Day 3: Date & Number Formatting
- Added locale-aware formatters using `Intl.DateTimeFormat` in `utils/formatters.js`.
- Used inside components like `BookMeta.js`.

### Day 4: Language Switcher UI
- Built a dropdown-based language switcher in `LanguageSwitcher.js`.
- Used in app layout to allow real-time switching of language.

### Day 5: Testing
- Created test cases for language switcher component under `__tests__/`.
- Verified dynamic language updates using Jest.

### Day 6: Documentation
- Documented translation setup, folder structure, and how to add a new language.
- File: `day6/documentation.txt`.

### Day 7: Deployment & Verification
- File: `day7/deployment checks.txt`.
- Tested in multiple browsers and devices.
- Verified locale persistence and error handling.

## Adding New Languages

1. Create a new folder under `src/locales/{lang-code}`.
2. Add `translation.json` with all key-value pairs.
3. Update `i18n.js` to include the new language.

## Tools Used

- React
- react-i18next
- JavaScript
- Intl.DateTimeFormat
- Jest

```
