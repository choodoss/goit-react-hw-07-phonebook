import { createSlice } from "@reduxjs/toolkit";
import { GetAll, dataContacts, postContact } from "./FetchFn/getDataContacts";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    }
}
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: async (state, { payload }) => {
            dataContacts(postContact(payload))
        },
        deleteContact: (state, { payload }) => {
            state.contacts.items = state.contacts.items.filter(contact => !contact.id.includes(payload));
            dataContacts(deleteContact, payload);
        },
        fetchContacts: (state, { payload }) => {

        },

        fetchingContacts: (state) => {
            state.contacts.isLoading = true;
        },
        fullfildContacts: (state, { payload }) => {
            console.log(payload)
            state.contacts.items = payload.sort((a, b) => a.name.localeCompare(b.name));
            state.contacts.isLoading = false;
            state.contacts.error = null;
        },
        errorContacts: (state, { payload }) => {
            state.contacts.isLoading = false;
            state.contacts.error = payload;
        },
    }
});

export const reducerContact = contactSlice.reducer;

export const { addContact, deleteContact, fetchContacts, fetchingContacts, fullfildContacts, errorContacts } = contactSlice.actions;

