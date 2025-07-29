// src/redux/popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    isOpen: false,
    popupType: 'signin', // 'signin' | 'signup'
  },
  reducers: {
    openPopup: (state, action) => {
      state.isOpen = true;
      state.popupType = action.payload || 'signin';
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
