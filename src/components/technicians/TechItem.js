import React from 'react'
import PropTypes from 'prop-types'

const TechItem = ({ tech }) => {
    return (
        <div>
            <li className='collection-item'>
                <p>{tech.firstname}{' '}{tech.lastname}
                    <a href='#!' className='secondary-content'><i className='material-icons grey-text'>delete</i></a>
                </p>
            </li >
        </div>
    )
}

export default TechItem

TechItem.propType = {
    tech: PropTypes.object.isRequired
}
