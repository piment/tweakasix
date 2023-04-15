import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const guitarSlice = createSlice({
  name: "guitar_set",
  initialState: {
 colorSet :{
  id:0,
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
      gloss : 50,
      texture_path : "stocked/1681217837265.png",
    },
  },

  reducers: {
    addColor: (state, action) => {
      console.log(action.payload)
      state.colorSet.id = action.payload.id
      state.colorSet.side = action.payload.side;
      state.colorSet.binding = action.payload.binding;
      state.colorSet.tableback = action.payload.tableback;
      state.colorSet.tablefront = action.payload.tablefront;
      state.colorSet.fretbinding = action.payload.fretbinding;
      state.colorSet.fretboard = action.payload.fretboard;
      state.colorSet.inlay = action.payload.inlay;
      state.colorSet.nut = action.payload.nut;
      state.colorSet.frets = action.payload.frets;
      state.colorSet.knobs = action.payload.knobs;
      state.colorSet.pickup_cover = action.payload.pickup_cover;
      state.colorSet.pickup_ring = action.payload.pickup_ring;
      state.colorSet.neckwood = action.payload.neckwood;
      state.colorSet.metalpieces = action.payload.metalpieces;
      state.colorSet.texture_path = action.payload.texture_path
      state.gloss = action.payload.gloss
return
    },
  },
  
});


export const { addColor, dropTrigger, setColor} = guitarSlice.actions;
export default guitarSlice.reducer;
