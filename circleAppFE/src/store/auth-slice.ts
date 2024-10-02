import { UserStoreDTO } from "../features/auth/types/dto";
import { User } from "../types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {} as User;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserStoreDTO>) {
      return {
        ...state,
        id: action.payload.id,
        fullName: action.payload.fullName,
        email: action.payload.email,
        role: action.payload.role,
      };
    },
    removeUser() {
      return {} as UserStoreDTO;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
