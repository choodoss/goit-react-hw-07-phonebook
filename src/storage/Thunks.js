import { createAsyncThunk } from "@reduxjs/toolkit"
import { addContact, deleteContact, getAllContacts } from "./FetchFn/getDataContacts"

export const getItemsThunk = createAsyncThunk('contacts/getAllContacts', (_, thunkApi) => {
    try {
        return getAllContacts();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContactThunk = createAsyncThunk('contacts/addContact', async (payload) => {
    await addContact({ name: payload.get('name'), phoneNumber: payload.get('phoneNumber') });
    const data = await getAllContacts();
    return data;
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (payload) => {
    await deleteContact(payload);
    const data = await getAllContacts();
    return data;
});

// export const addContactThunk = (payload) => {
//     return async (dispatch) => {
//         await dataContacts(postContact({ name: payload.get('name'), phoneNumber: payload.get('phoneNumber') }))
//         dispatch(getItemsThunk())
//     }
// }
// export const deleteContactThunk = (payload) => {
//     return async (dispatch) => {
//         await dataContacts(deleteContacts(), payload)
//         dispatch(getItemsThunk())
//     }
// }
// export const getItemsThunk = () => {
//     return async (dispatch) => {
//         dispatch(fetchingContacts())
//         try {
//             const data = await dataContacts()
//             dispatch(fullfildContacts(data))
//         } catch (error) {
//             dispatch(errorContacts(error.message))
//         }
//     }
// }

