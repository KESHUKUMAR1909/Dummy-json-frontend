import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from '../Thunks/authThunks.js'; // adjust the path

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        loading: false,
        error: null
    },

    // Reducers is used when i dont want to to call asynchorous calls only for the synchornous calls
    reducers: {
        logout: (state) => {
            state.token = null,
                state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload
                state.loading = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.token = null;
                state.loading = false;
            });
    },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer; 