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
    }
  }
});

export const { fetchData } = usersSlice.actions;
export default usersSlice.reducer;
