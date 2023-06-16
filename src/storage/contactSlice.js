import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, getItemsThunk, deleteContactThunk } from "./Thunks";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    }
}

let pendingContact = getItemsThunk.pending || addContactThunk.pending || deleteContactThunk.pending;
let fulfilledContact = getItemsThunk.fulfilled || addContactThunk.fulfilled || deleteContactThunk.fulfilled;
let rejectedContact = getItemsThunk.rejected || addContactThunk.rejected || deleteContactThunk.rejected;

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        console.dir(getItemsThunk)
        builder
            .addCase(pendingContact, (state) => { state.contacts.isLoading = true })
            .addCase(fulfilledContact, (state, { payload }) => {
                state.contacts.items = payload.sort((a, b) => a.name.localeCompare(b.name));
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(rejectedContact, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = payload;
            })
    }

    import { createAsyncThunk } from "@reduxjs/toolkit"
    import { dataContacts, deleteContacts, postContact } from "./FetchFn/getDataContacts"
    
    
    export const getItemsThunk = createAsyncThunk('contacts/getAllcontacts', () => {
        return dataContacts()
    })
    
    export const addContactThunk = createAsyncThunk('contact/addContact', async (payload) => {
        await dataContacts(postContact({ name: payload.get('name'), phoneNumber: payload.get('phoneNumber') }))
        return dataContacts()
    })
    
    export const deleteContactThunk = createAsyncThunk('contact/deleteContact', async (payload) => {
        await dataContacts(deleteContacts(), payload);
        return dataContacts()
    })

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


