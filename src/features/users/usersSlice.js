import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Graham Potter' },
    { id: '1', name: 'Neil Armstrong' },
    { id: '2', name: 'Japheth Mutai' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer