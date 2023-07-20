import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: 'en',
  reducers: {
    changeLanguage: (state, action) => action.payload,
  },
});
