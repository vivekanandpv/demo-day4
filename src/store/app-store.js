import { configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './theme-slice';
import { languageSlice } from './language-slice';

export const appStore = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    language: languageSlice.reducer,
  },
});
