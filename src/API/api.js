import * as axios from 'axios'
import {setUpdatedUsersThunk} from '../Redux/usersReducer'

export const apiRequest = {
    getUsers(page) {
        return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    },
    getToken() {
        return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    },
    getPositions() {
        return axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    },
    register(name, email, phone, position_id, file, token) {
        let formData = new FormData();
        formData.append('position_id', position_id);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', file);
        return axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, formData,
            {headers: {'token': token, 'Content-Type': 'multipart/form-data'}})
    },
}
