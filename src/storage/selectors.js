export const selectAllState = state => {
    return ({
        contacts: state.contacts.contacts.items.filter(contact =>
            contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())),
        filter: state.filter.filter,
        isLoading: state.contacts.contacts.isLoading,
        error: state.contacts.contacts.error,
    })
};
