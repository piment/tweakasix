import { createSlice, createAction } from "@reduxjs/toolkit";

 const initialState= { 
    userData : {},
    guitarsList : []
   }

export const userSlice = createSlice({
  name: "user_data",
initialState,

 reducers : {
  userIn : (state, action) => {
console.log(action.payload)
state.userData = action.payload
  },
  userOut : (state) => {
    state.userData = {}
  },
  userGuitarsSave : (state, action) => {
    console.log(action.payload)
    state.userData.guitarsList = action.payload
  }
  }
  
});
export const { userIn, userOut, userGuitarsSave } = userSlice.actions;

export default userSlice.reducer;