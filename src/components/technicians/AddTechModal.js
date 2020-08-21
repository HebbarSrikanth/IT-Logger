import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {

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
            console.log(state)
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

export default AddTechModal
