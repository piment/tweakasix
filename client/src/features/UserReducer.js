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
  },
  userUpdate : (state, action) => {
    console.log(action.payload)
    state.userData.user = {
      username: action.payload.username,
      firstname: action.payload.firstname,
      lastname: action.payload.lastname,
      email: action.payload.email, 
  },
  state.userData.user_info ={
    number: action.payload.number,
    street: action.payload.street,
    postal: action.payload.postal,
    city: action.payload.city,
    country: action.payload.country,
    phone: action.payload.phone,
  }

}
  }
  
});
export const { userIn, userOut, userGuitarsSave, userUpdate } = userSlice.actions;

export default userSlice.reducer;