import types from "./types"

//Fetch the logs from Backend
export const getLogs = () => async (dispatch) => {
    try {

        setLoding();
        //Fetch the data from backend
        const res = await fetch('/logs')
        const data = await res.json()

        dispatch({
            type: types.GET_LOGS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: types.SET_LOGERROR,
            payload: err.response.data
        })
    }
}

//Set Loading to true
export const setLoding = () => {
    return {
        type: types.SET_LOADING
    }
}

//Add Logs to the backend
export const addLog = (log) => async dispatch => {

    try {
        setLoding();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await res.json();

        dispatch({
            type: types.ADD_LOG,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: types.SET_LOGERROR,
            payload: err.response.data
        })
    }
}

//Delete the log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoding()

        //Delete the log
        await fetch('/logs/' + id, {
            method: 'DELETE'
        })

        dispatch({
            type: types.DELETE_LOG,
            payload: id
        })

    } catch (err) {
        dispatch({
            type: types.SET_LOGERROR,
            payload: err.response.data
        })
    }
}

//Update the log
export const updateLog = (updatedLog) => async dispatch => {
    try {
        setLoding()

        //Update log
        const res = await fetch('/logs/' + updatedLog.id, {
            method: 'PUT',
            body: JSON.stringify(updatedLog),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();

        dispatch({
            type: types.UPDATE_LOG,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: types.SET_LOGERROR,
            payload: err.response.data
        })
    }
}

//Set the current user
export const currentUser = log => {
    return {
        type: types.SET_CURRENT,
        payload: log
    }
}

//Search 
export const searchLog = searchText => async dispatch => {
    try {
        setLoding()

        const res = await fetch('/logs?q=' + searchText)
        const data = await res.json()

        dispatch({
            type: types.SEARCH_LOG,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: types.SET_LOGERROR,
            payload: err.response.data
        })
    }
}