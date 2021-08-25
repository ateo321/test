import { apiUrl } from 'config';
import { fetchWrapper } from 'helpers';

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${apiUrl}/users`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return {"title":"Mr","firstName":"Frank","lastName":"Murphy","email":"frank.murphy@rustvale.com","role":"User","password":"sue123","id":1,"dateCreated":"2021-04-08T05:33:05.184Z","dateUpdated":"2021-04-15T07:20:22.768Z"};;
	//fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
