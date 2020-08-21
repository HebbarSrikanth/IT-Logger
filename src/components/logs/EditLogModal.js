import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [state, setState] = useState({
        message: '',
        tech: '',
        attention: false
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        if (state.message === '' || state.tech === '') {
            M.toast({ html: 'Message and Technician Name is mandatory' })
        } else {
            console.log(state)
            setState({
                message: '',
                tech: '',
                attention: false
            })
        }
    }

    return (
        <div className='modal' id='edit-log-modal' style={{ width: '50%', height: '75%' }}>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Edit Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={state.message} onChange={handleChange} />
                        <label htmlFor='message'>Log Message</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <select
                            name='tech'
                            className='browser-default'
                            value={state.tech}
                            onChange={handleChange}
                        >
                            <option value='' disabled>Select Technician</option>
                            <option value='Lenoard'>Lenoard</option>
                            <option value='Sheldon Cooper'>Sheldon Cooper</option>
                            <option value='Rajesh kutrapali'>Rajesh kutrapali</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <label>
                            <input type="checkbox"
                                name='attention'
                                onChange={handleChange}
                                value={!state.attention}
                                className='filled-in'
                            />
                            <span><b>Attention</b></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={handleSubmit} className='modal-close waves-effect waves-green btn'>Enter</a>
            </div>
        </div>
    )
}

export default EditLogModal
