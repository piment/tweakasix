import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  texture_files: [],
  texture_assign: {},
};

export const textureSlice = createSlice({
  name: "texture_data",
  initialState,

  reducers: {
    textureAdd: (state, action) => {
   
 state.texture_files = action.payload
    },
    textureDelete: (state, action) => {
      const imgId = action.payload;
      console.log(imgId)
      state.texture_files = state.texture_files.filter((file) => file !== imgId);

    //   return {
    //     ...state,
    //     texture_files: state.texture_files.filter((file) => file !== imgId),
    //   };
    },
    textureAssign: (state, action) => {
        console.log('assign')
    },
    textureUnassign: (state, action) => {
      console.log('unassign')
    },
  },
});
export const { textureAdd, textureDelete, textureAssign, textureUnassign } =
  textureSlice.actions;

export default textureSlice.reducer;
