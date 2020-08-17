import React from 'react'
import PropTypes from 'prop-types'


const LogItem = ({ log }) => {
    return (
        <li className='collection-item'>
            <div style={{ textAlign: 'center' }}>
                {log.message}
            </div>
        </li>
    )
}

export default LogItem

LogItem.propType = {
    log: PropTypes.object.isRequired
}
