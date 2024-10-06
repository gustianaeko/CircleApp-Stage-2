import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiBaseURL } from "../libs/api";
import { UserStoreDTO } from "../features/auth/types/dto";

export const getUserLogged = createAsyncThunk(
  "users/getUserLogged",
  async () => {
    const response = await apiBaseURL.get<null, { data: UserStoreDTO }>(
      "/user/me"
    );
    return response.data;
  }
);

interface UserState {
  id: boolean;
  role: string;
  entities: UserStoreDTO;
}

const initialState: UserState = {
  entities: {} as UserStoreDTO,
  id: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStoreDTO>) => {
      state.entities = action.payload;
    },
    removeUser() {
      return initialState;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
