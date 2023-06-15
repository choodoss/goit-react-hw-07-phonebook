export const allsSelector = state => {
    return ({
        contacts: state.contacts.contacts.filter(contact =>
            contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
        ),
        filter: state.filter.filter
    })
};