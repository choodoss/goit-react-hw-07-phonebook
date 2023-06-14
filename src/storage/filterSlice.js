import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, { payload }) => {
            state.filter = payload;
        }
    }
});

export const reducerFilter = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;