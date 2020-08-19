import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloading from '../layouts/Preloading'

const Logs = () => {

    const [state, setState] = useState({
        logs: [],
        loading: false
    })

    //Initially when the component is loaded , fetch the logs from backend
    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        //Set loading to true as it has to fetch the data
        setState({ ...state, loading: true })

        //Fetch the data from the backend server
        const res = await fetch('/logs')
        const data = await res.json();

        //Once the data is received then ,set log to logs and loading to false
        setState({
            ...state,
            logs: data,
            loading: false
        })
    }

    if (state.loading) {
        return <Preloading />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!state.loading && state.logs.length === 0 ? (<h4>No Logs....</h4>) : (
                state.logs.map(log => <LogItem key={log.id} log={log} />)
            )}
        </ul>
    )
}

export default Logs
