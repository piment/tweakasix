import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    value: {
      side: "#ffffff",
      binding: "#ffffff",
      tablefront: "#ffffff",
      tableback: "#ffffff",
    },
  },

  reducers: {
    addColor: (state, action) => {
      state.value.side = action.payload.side;
      state.value.binding = action.payload.binding;
      state.value.tableback = action.payload.tableback;
      state.value.tablefront = action.payload.tablefront;
    },
  },
});

export const { addColor } = colorSlice.actions;
export default colorSlice.reducer;
