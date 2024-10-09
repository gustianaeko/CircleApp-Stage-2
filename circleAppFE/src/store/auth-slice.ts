import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStoreDTO } from "../features/auth/types/dto";

const initialState: UserStoreDTO = {} as UserStoreDTO;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserStoreDTO>) {
            const userData = {
                id: action.payload.id,
                fullname: action.payload.fullname,
                role: action.payload.role,
                username: action.payload.username,
                bio: action.payload.bio,
                profileImage: action.payload.profileImage,
                followers: action.payload.followers,
                following: action.payload.followers,
                threads: action.payload.threads  
            }
            
            localStorage.setItem("user", JSON.stringify(userData))

            return  {...state, ...userData}
        },
        removeUser() {
            return {} as UserStoreDTO
        }
    }
})

export const {setUser, removeUser} = authSlice.actions

export default authSlice.reducer