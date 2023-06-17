import axios from 'axios';

axios.defaults.baseURL = 'https://648ae78d17f1536d65e9eeb8.mockapi.io/';

export const getAllContacts = async () => {
    try {
        const response = await axios.get('contacts');
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const addContact = async (value) => {
    try {
        const response = await axios.post('contacts', value);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteContact = async (id) => {
    try {
        await axios.delete(`contacts/${id}`);
    } catch (error) {
        throw new Error(error.message);
    }
};