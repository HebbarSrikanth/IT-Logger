import types from '../actions/types'

const initialState = {
    techs: [],
    techErr: null,
    loading: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_TECH: return {
            ...state,
            techs: action.payload
        }

        case types.ADD_TECH: return {
            ...state,
            techs: [...state.techs, action.payload],
            loading: false
        }

        case types.DELETE_TECH: return {
            ...state,
            techs: state.techs.filter(tech => tech.id !== action.payload),
            loading: false
        }

        case types.SET_LOADING: return {
            ...state,
            loading: true
        }

        case types.TECH_ERROR: return {
            ...state,
            techErr: action.payload
        }
        default: return state
    }
}