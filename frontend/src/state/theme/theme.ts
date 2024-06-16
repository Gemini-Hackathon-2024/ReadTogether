import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: localStorage.getItem("theme") || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {   
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});
