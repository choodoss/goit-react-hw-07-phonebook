import { combineReducers } from "redux";
import { reducerContact } from "./contactSlice";
import { reducerFilter } from "./filterSlice";

export const reducer = combineReducers({
    contacts: reducerContact,
    filter: reducerFilter,
})


// import { createReducer } from "@reduxjs/toolkit";
// import { addContactsAction, filterContactsAction, removeContactsAction } from "./action";

// export const initState = {
//     contacts: [],
//     filter: '',
// }

// export const reducer = createReducer(initState, {
//     [addContactsAction]: (state, { payload }) => {
//         state.contacts = [...state.contacts, payload].sort((a, b) => a.name.localeCompare(b.name));
//     },
//     [removeContactsAction]: (state, { payload }) => {
//         state.contacts = state.contacts.filter(contact => !contact.id.includes(payload));
//     },
//     [filterContactsAction]: (state, { payload }) => {
//         state.filter = payload;
//     }
// });

// export const reducer = (state = initState, { type, payload }) => {
//     switch (type) {
//         case ADD_CONTACTS:
//             return {
//                 ...state,
//                 contacts: [...state.contacts, payload]
//             };
//         case REMOVE_CONTACTS:
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => !contact.id.includes(payload))
//             };
//         case FILTER_CONTACTS:
//             return {
//                 ...state, filter: payload
//             };
//         default:
//             return state;
//     }
// };