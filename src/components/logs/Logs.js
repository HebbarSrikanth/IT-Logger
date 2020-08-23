import React, { useEffect } from 'react'
import LogItem from './LogItem'
import Preloading from '../layouts/Preloading'
import { connect } from 'react-redux'
import { getLogs } from '../../actions/logAction'

const Logs = ({ log: { logs, loading }, getLogs }) => {

    //Initially when the component is loaded , fetch the logs from backend
    useEffect(() => {
        getLogs()
        //eslint-disable-next-line
    }, [])

    if (loading || logs === null) {
        return <Preloading />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<h4 style={{ textAlign: 'center' }}>No Logs....</h4>) : (
                logs.map(log => <LogItem key={log.id} log={log} />)
            )}
        </ul>
    )
}

const mapStateToProps = state => ({
    log: state.logs
})

export default connect(mapStateToProps, { getLogs })(Logs)
