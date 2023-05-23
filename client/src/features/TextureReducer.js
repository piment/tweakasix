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
   console.log('CHUIBO')

   const tempArr = {}
const selectedPart = action.payload.forEach((part ) => (tempArr[part.name] = part.file) )
console.log(JSON.stringify(state.texture_assign))
        return {
            ...state, 
         texture_assign:{...state.texture_assign, ...tempArr}
        }


    },
    textureDelete: (state, action) => {
    //   const imgId = action.payload;
    //   console.log(imgId)
    //   state.texture_files = state.texture_files.filter((file) => file !== imgId);

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
