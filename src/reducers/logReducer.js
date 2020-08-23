import types from "../actions/types"

const initialState = {
    loading: false,
    logs: null,
    errors: null,
    current: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOADING: return {
            ...state,
            loading: true
        }

        case types.GET_LOGS: return {
            ...state,
            logs: action.payload,
            loading: false
        }

        case types.SET_LOGERROR:
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            }

        case types.ADD_LOG: return {
            ...state,
            logs: [...state.logs, action.payload],
            loading: false
        }

        case types.DELETE_LOG: return {
            ...state,
            logs: state.logs.filter(log => log.id !== action.payload),
            loading: false
        }

        case types.UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false,
            }

        case types.SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        default: return state
    }
}