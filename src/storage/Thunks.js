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

