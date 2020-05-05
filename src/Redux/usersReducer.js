import {apiRequest} from '../API/api'

const initialState = {
    users: [],
    total: 1,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.payload],
            }
        case 'SET_UPDATED_USERS':
            return {
                ...state,
                users: action.payload,
            }
        case 'SET_TOTAL_PAGES':
            return {
                ...state,
                total: action.payload,
            }
        default:
            return state
    }
}

const setUsersAC = (payload) => ({type: 'SET_USERS', payload})
const setUpdatedUsersAC = (payload) => ({type: 'SET_UPDATED_USERS', payload})
const setTotalPagesAC = (payload) => ({type: 'SET_TOTAL_PAGES', payload})

export const setUsersThunk = (page) => {
    return (dispatch) => {
        apiRequest.getUsers(page).then (data => {
            dispatch (setUsersAC(data.data.users) );
            dispatch (setTotalPagesAC(data.data.total_pages) );
        })
    }
}

export const setUpdatedUsersThunk = () => {
    return (dispatch) => {
        apiRequest.getUsers(1).then (data => {
            dispatch (setUpdatedUsersAC(data.data.users) )
        })
    }
}

