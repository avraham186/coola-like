import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filterProps",
  initialState: {
    title: "",
    type: "",
    location: "",
    openSearch: "",
  },
  reducers: {
    titleValue: (state, action) => {
      state.title = action.payload;
    },
    typeValue: (state, action) => {
      state.type = action.payload;
    },
    locationValue: (state, action) => {
      state.location = action.payload;
    },
  },
});
export const { titleValue, typeValue, locationValue } = slice.actions;
export default slice.reducer;
