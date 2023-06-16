const URL = 'https://648ae78d17f1536d65e9eeb8.mockapi.io/';
export const GetAllContact = {
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
export const deleteContacts = () => ({
    method: 'DELETE',
})

export const dataContacts = async (parameters, id = "") => {
    console.log(`${URL}contacts${id ? `/${id}` : ''}`)
    const res = await fetch(`${URL}contacts${id ? `/${id}` : ''}`, parameters);
    if (!res.ok) {
        throw new Error(res.status);
    }
    return res.json();
}