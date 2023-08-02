import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: false,

  reducers: {
    swapTheme: (state) => {
      state = state ? false : true;
    },
  },
});
