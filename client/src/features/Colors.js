import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    value: {
      side: "#ffffff",
      binding: "#ffffff",
      tablefront: "#ffffff",
      tableback: "#ffffff",
      fretbinding: "#ffffff",
      fretboard: "#ffffff",
      inlay: "#ffffff",
      nut: "#ffffff",
      frets: "#ffffff",
      knobs: "#ffffff",
      pickup_cover: "#ffffff",
      pickup_ring: "#ffffff",
      neckwood: "#ffffff",
      metalpieces: "#ffffff",
    },
  },

  reducers: {
    addColor: (state, action) => {
      state.value.side = action.payload.side;
      state.value.binding = action.payload.binding;
      state.value.tableback = action.payload.tableback;
      state.value.tablefront = action.payload.tablefront;
      state.value.fretbinding = action.payload.fretbinding;
      state.value.fretboard = action.payload.fretboard;
      state.value.inlay = action.payload.inlay;
      state.value.nut = action.payload.nut;
      state.value.frets = action.payload.frets;
      state.value.knobs = action.payload.knobs;
      state.value.pickup_cover = action.payload.pickup_cover;
      state.value.pickup_ring = action.payload.pickup_ring;
      state.value.neckwood = action.payload.neckwood;
      state.value.metalpieces = action.payload.metalpieces;
    },
  },
});

export const { addColor } = colorSlice.actions;
export default colorSlice.reducer;
