export const allsSelector = state => {
    return ({
        contacts: state.contacts.contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())),
        filter: state.filter.filter
    })
};
