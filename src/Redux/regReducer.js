import {apiRequest} from '../API/api'

const initialState = {
    token: null,
    positions: [],
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            }
        case 'SET_POSITIONS':
            return {
                ...state,
                positions: action.payload,
            }
        default:
            return state
    }
}

const setTokenAC = (payload) => ({type: 'SET_TOKEN', payload})
const setPositionsAC = (payload) => ({type: 'SET_POSITIONS', payload})

export const setTokenThunk = () => {
    return (dispatch) => {
        apiRequest.getToken().then (data => {
            dispatch (setTokenAC(data.data.token) )
        })
    }
}

export const setPositionsThunk = () => {
    return (dispatch) => {
        apiRequest.getPositions().then (data => {
            dispatch (setPositionsAC(data.data.positions) )
        })
    }
}
