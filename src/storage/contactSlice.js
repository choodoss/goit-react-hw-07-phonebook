import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContactThunk, getItemsThunk, deleteContactThunk } from "./Thunks";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    }
}

const hendlePending = (state) => { state.contacts.isLoading = true }
const hendleFulfilled = (state, { payload }) => {
    state.contacts.items = payload.sort((a, b) => a.name.localeCompare(b.name));
    state.contacts.isLoading = false;
    state.contacts.error = null;
}
const hendleRejected = () => (state, { payload }) => {
    state.contacts.isLoading = false;
    state.contacts.error = payload;
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getItemsThunk.fulfilled, hendleFulfilled)
            .addMatcher((action) => action.type.endsWith('/pending'), hendlePending)
            // .addMatcher((action) => action.type.endsWith('/fulfilled'), hendleFulfilled)
            .addMatcher((action) => action.type.endsWith('/rejected'), hendleRejected)
        // .addMatcher(isAnyOf([getItemsThunk.pending, addContactThunk.pending, deleteContactThunk.pending]), hendlePending)
        // .addMatcher(isAnyOf([getItemsThunk.fulfilled, addContactThunk.fulfilled, deleteContactThunk.fulfilled]), hendleFulfilled)
        // .addMatcher(isAnyOf([getItemsThunk.rejected, addContactThunk.rejected, deleteContactThunk.rejected]), hendleRejected)
        // .addCase(getItemsThunk.pending, hendlePending)
        // .addCase(getItemsThunk.fulfilled, hendleFulfilled)
        // .addCase(getItemsThunk.rejected, hendleRejected)
        // .addCase(addContactThunk.pending, hendlePending)
        // .addCase(addContactThunk.fulfilled, hendleFulfilled)
        // .addCase(addContactThunk.rejected, hendleRejected)
        // .addCase(deleteContactThunk.pending, hendlePending)
        // .addCase(deleteContactThunk.fulfilled, hendleFulfilled)
        // .addCase(deleteContactThunk.rejected, hendleRejected)
    }

    // reducer:
    // {
    //     [getItemsThunk.pending]: (state) => {
    //         state.contacts.isLoading = true;
    //     },
    //     [getItemsThunk.fulfilled]: (state, { payload }) => {
    //         state.contacts.items = payload.sort((a, b) => a.name.localeCompare(b.name));
    //         state.contacts.isLoading = false;
    //         state.contacts.error = null;
    //     },
    //     [getItemsThunk.rejected]: (state, { payload }) => {
    //         state.contacts.isLoading = false;
    //         state.contacts.error = payload;
    //     },
    // }
});

export const reducerContact = contactSlice.reducer;


