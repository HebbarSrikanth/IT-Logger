import React from 'react'

const AddLogModal = () => {
    return (
        <div className='modal' id='add-log-modal'>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Add Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value='' />
                        <label htmlFor='message'>Log Message</label>
                    </div>
                </div>
                <div className='row'>
                    <div className="input-field">
                        <select>
                            <option value="-1">Choose Technician</option>
                            <option value="1">Sheldon Cooper</option>
                            <option value="2">Leonard</option>
                            <option value="3">Rajesh Kutrapalli</option>
                        </select>
                        <label>Tech</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddLogModal
