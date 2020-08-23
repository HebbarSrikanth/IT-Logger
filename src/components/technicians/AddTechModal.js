import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techAction'
import { connect } from 'react-redux'

const AddTechModal = ({ addTech }) => {

    const [state, setState] = useState({
        firstname: '',
        lastname: ''
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (state.firstname === '' || state.lastname === '') {
            M.toast({ html: 'First name and last name is mandatory' })
        } else {
            addTech(state)
            M.toast({ html: 'Add ' + state.firstname + ' ' + state.lastname + ' successfully' })
            setState({
                firstname: '',
                lastname: ''
            })
        }
    }

    return (
        <div className='modal' id='add-tech' style={{ width: '50%', height: 'auto' }}>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Add technician</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='firstname' value={state.firstname} onChange={handleChange} />
                        <label htmlFor='firstname'>First Name</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='lastname' value={state.lastname} onChange={handleChange} />
                        <label htmlFor='lastname'>Last Name</label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={handleSubmit} className='modal-close waves-effect waves-green btn'>Enter</a>
            </div>
        </div>
    )
}

AddTechModal.prototype = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal)
