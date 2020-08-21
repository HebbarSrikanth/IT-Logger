import React from 'react'
import PropTypes from 'prop-types'


const LogItem = ({ log }) => {
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={'modal-trigger ' + (log.attention === 'true' ? 'red-text' : 'blue-text')}>
                    {log.message}
                </a>
                <br />
                <span className='grey-text'>Last Updated by {log.tech} on : {log.date}</span>
                <a href='#!' className='secondary-content'><i className='material-icons grey-text'>delete</i></a>
            </div>
        </li >
    )
}
export default LogItem

LogItem.propType = {
    log: PropTypes.object.isRequired
}
