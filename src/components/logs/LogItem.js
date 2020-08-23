import React from 'react'
import PropTypes from 'prop-types'
import { deleteLog, currentUser } from '../../actions/logAction'
import { connect } from 'react-redux'

const LogItem = ({ log, deleteLog, currentUser }) => {
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" onClick={() => currentUser(log)} className={'modal-trigger ' + (log.attention === 'true' ? 'red-text' : 'blue-text')}>
                    {log.message}
                </a>
                <br />
                <span className='grey-text'>Last Updated by {log.tech} on : {log.date}</span>
                <a href='#!' onClick={() => deleteLog(log.id)} className='secondary-content'><i className='material-icons grey-text'>delete</i></a>
            </div>
        </li >
    )
}

LogItem.propType = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    currentUser: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, currentUser })(LogItem)

