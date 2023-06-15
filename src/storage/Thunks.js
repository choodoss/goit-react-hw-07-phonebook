import { dataContacts } from "./FetchFn/getDataContacts"
import { errorContacts, fetchingContacts, fullfildContacts } from "./contactSlice"

export const getItemsThunk = () => {
    return async (dispatch) => {
        dispatch(fetchingContacts())
        try {
            const data = await dataContacts()
            dispatch(fullfildContacts(data))
        } catch (error) {
            console.log(error)
            dispatch(errorContacts(error))
        }
    }
}

