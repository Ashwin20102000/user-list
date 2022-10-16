import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: []
  },
  reducers: {
    fetchData: (state, action) => {
      return {
        users: action.payload
      };
    },
    addUser:(state,action)=>{
      return {
        users: action.payload
      }
    }

  }
});

export const { fetchData , addUser } = usersSlice.actions;
export default usersSlice.reducer;
