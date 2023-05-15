import { createSlice, createAction } from "@reduxjs/toolkit";



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
      metal_pieces: "#ffffff",
      gloss : 50,
      scratch : 0,
      wood : 0,
      texture_path : "stocked/1681217837265.png",
      body: "#ffffff",
      pickguard: "#ffffff",
      single_plastic: "#ffffff",
      single_metal: "#ffffff",
      backplate: "#ffffff"
    },

    dropped : 0,
  },

  reducers: {
    addColor: (state, action) => {
      // console.log(action.payload)
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
      state.colorSet.metal_pieces = action.payload.metal_pieces;
      state.colorSet.texture_path = action.payload.texture_path
      state.colorSet.gloss = action.payload.gloss
      state.colorSet.scratch = action.payload.scratch
      state.colorSet.wood = action.payload.wood
      state.colorSet.body = action.payload.body
      state.colorSet.pickguard = action.payload.pickguard
      state.colorSet.single_plastic = action.payload.single_plastic
      state.colorSet.single_metal = action.payload.single_metal
      state.colorSet.backplate = action.payload.backplate
    },
    triggerDrop: (state, action) => {

        state.dropped += 1
      
      },
    resetDrop : (state, action) => {

      state.dropped = action.payload
    }

  },
  
});


export const { addColor,  setColor, triggerDrop, resetDrop} = guitarSlice.actions;
export default guitarSlice.reducer;
