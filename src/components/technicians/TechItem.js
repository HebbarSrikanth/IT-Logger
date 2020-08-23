import React from 'react'
import PropTypes from 'prop-types'
import { deleteUser } from '../../actions/techAction'
import { connect } from 'react-redux'

const TechItem = ({ tech, deleteUser }) => {
    return (
        <div>
            <li className='collection-item'>
                <p>{tech.firstname}{' '}{tech.lastname}
                    <a href='#!' onClick={() => deleteUser(tech.id)} className='secondary-content'><i className='material-icons grey-text'>delete</i></a>
                </p>
            </li >
        </div>
    )
}

TechItem.propType = {
    tech: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default connect(null, { deleteUser })(TechItem)
