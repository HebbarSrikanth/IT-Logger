import types from "./types"

export const fetchTech = () => async dispatch => {
    try {

        setLoading()

        const res = await fetch('/techs')
        const data = await res.json()

        dispatch({
            type: types.FETCH_TECH,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: types.TECH_ERROR,
            payload: err.response.statusText
        })
    }
}

export const addTech = tech => async dispatch => {
    try {

        setLoading();

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch({
            type: types.ADD_TECH,
            payload: data
        })

    } catch (err) {
        console.log(err)
        dispatch({
            type: types.TECH_ERROR,
            payload: err.response.statusText
        })
    }
}

export const setLoading = () => {
    return {
        type: types.SET_LOADING
    }
}

export const deleteUser = (id) => async dispatch => {
    try {

        setLoading()

        await fetch('techs/' + id, {
            method: 'DELETE'
        })

        dispatch({
            type: types.DELETE_TECH,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: types.TECH_ERROR,
            payload: err.response.statusText
        })
    }
}
