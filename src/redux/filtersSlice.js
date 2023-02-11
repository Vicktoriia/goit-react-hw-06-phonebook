import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = filtersSlice.actions;
const filtersReducer = filtersSlice.reducer;

export default filtersReducer;
