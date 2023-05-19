import { createSlice, createAction } from "@reduxjs/toolkit";

 const initialState= { 
    userData : {}
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
  }
  
});
export const { userIn, userOut } = userSlice.actions;

export default userSlice.reducer;