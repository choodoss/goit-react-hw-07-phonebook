const URL = 'https://648ae78d17f1536d65e9eeb8.mockapi.io/';
export const GetAll = {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
}
export const GetById = {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
}
export const postContact = (obj) => {
    return {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(obj)
    }
}
export const deleteContact = {
    method: 'DELETE',
}

export const dataContacts = async (pramater, id = "") => {

    console.log(pramater)
    console.log(`${URL}contacts${id ? `/${id}` : ''}`)
    try {
        const res = await fetch(`${URL}contacts${id ? `/${id}` : ''}`, pramater);
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    } catch (error) {
        throw new Error(error);
    }
}