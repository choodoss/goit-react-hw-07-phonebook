import { combineReducers } from "redux";
import { reducerContact } from "./contactSlice";
import { reducerFilter } from "./filterSlice";

export const reducer = combineReducers({
    contacts: reducerContact,
    filter: reducerFilter,
})