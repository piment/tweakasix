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
   console.log(action.payload)

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


    textureClear: (state, action) => {
      console.log(action.payload)
      const cleared = Object.fromEntries(Object.entries(state.texture_assign).map(([key, value]) => {
        if (value === action.payload) {
          return [key, null];
        }
        return [key, value];
      }));
      
  
      return {
        ...state,
        texture_assign: cleared
      };
    }
  },
});
export const { textureAdd, textureDelete, textureAssign, textureClear } =
  textureSlice.actions;

export default textureSlice.reducer;
