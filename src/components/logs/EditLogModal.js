import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logAction'
import TechnicianSelect from '../technicians/TechnicianSelect'


const EditLogModal = ({ curr, updateLog }) => {

    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)


    useEffect(() => {
        if (curr) {
            setMessage(curr.message)
            setTech(curr.tech)
            curr.attention = curr.attention === 'true' ? true : false
            setAttention(curr.attention)
        }
        //eslint-disable-next-line
    }, [curr])

    const handleSubmit = () => {

        if (message === '' || tech === '') {
            M.toast({ html: 'Message and Technician Name is mandatory' })
        } else {
            //console.log(attention)
            updateLog({
                message,
                tech,
                attention: attention === true ? 'true' : 'false',
                date: new Date(),
                id: curr.id
            })
            //Clear fields
            setMessage('')
            setTech('')
            setAttention(false)
        }
    }

    return (
        <div className='modal' id='edit-log-modal' style={{ width: '50%', height: '75%' }}>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Edit Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <select
                            className='browser-default'
                            value={tech}
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value='' disabled>Select Technician</option>
                            <TechnicianSelect />
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <label>
                            <input
                                type='checkbox'
                                className='filled-in'
                                checked={attention}
                                value={attention}
                                onChange={e => setAttention(!attention)}
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

EditLogModal.prototype = {
    curr: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    curr: state.logs.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)
