import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
//   texture_files: [],
  texture_assign: {
    front : null,
    back : null,
    side : null,
    neck : null,
    pickguard : null
  },
};

export const textureSlice = createSlice({
  name: "texture_data",
  initialState,

  reducers: {
    textureAdd: (state, action) => {


   const tempArr = {}
const selectedPart = action.payload.forEach((part ) => (tempArr[part.name] = part.file) )

        return {
            ...state, 
         texture_assign:{...state.texture_assign, ...tempArr}
        }


    },
    textureDelete: (state, action) => {
   

      const tempArr = {}
      const selectedPart = action.payload.forEach((part ) => (tempArr[part.name] = null) )

    return {
      ...state, 
   texture_assign:{...state.texture_assign, ...tempArr}
  }


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
