export const allsSelector = state => ({
    contacts: state.contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
    ),
    filter: state.filter.filter
});