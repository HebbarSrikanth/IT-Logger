import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { searchLog } from '../../actions/logAction'
import PropTypes from 'prop-types'

const Searchbar = ({ searchLog }) => {
    const text = useRef('')

    const handleChange = e => {
        searchLog(text.current.value)
    }

    return (
        <nav style={{ marginBottom: '30px' }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" ref={text} type="search" placeholder='Search Logs...' onChange={handleChange} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

Searchbar.prototype = {
    searchLog: PropTypes.func.isRequired
}

export default connect(null, { searchLog })(Searchbar)
