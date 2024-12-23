import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.name), (state.email = action.payload.email);
    },
    removeUser: (state, action) => {
      (state.name = ""), (state.email = "");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
