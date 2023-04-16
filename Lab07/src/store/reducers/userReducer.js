import {createSlice} from "@reduxjs/toolkit";
import {uid} from "uid";

const initialState = {
    users: [],
};

const changeId = (arr) => {
    return arr.map(el => ({...el, id: uid(16)}))
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserAction: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        addUsersAction: (state, action) => {
            state.users = [...state.users, ...changeId(action.payload)];
        },
        removeUserAction: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    },
})

export const {addUserAction, addUsersAction, removeUserAction} = userSlice.actions;

export default userSlice.reducer;