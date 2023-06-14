import { createAction } from "@reduxjs/toolkit";

export const filterContactsAction = createAction('FILTER_CONTACTS');
export const addContactsAction = createAction('ADD_CONTACTS');
export const removeContactsAction = createAction('REMOVE_CONTACTS');

// export const filterContactsAction = value => {
//   return {
//     type: FILTER_CONTACTS,
//     payload: value,
//   };
// };
// export const addContactsAction = value => {
//   return {
//     type: ADD_CONTACTS,
//     payload: value,
//   };
// };
// export const removeContactsAction = idContact => {
//   return {
//     type: REMOVE_CONTACTS,
//     payload: idContact,
//   };
// };
