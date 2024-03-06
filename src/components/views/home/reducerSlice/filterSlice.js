import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "All",
  },
  reducers: {
    filterCategoryTodo: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterCategoryTodo } = filterSlice.actions;
export default filterSlice.reducer;
