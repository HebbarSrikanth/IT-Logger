import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTech } from '../../actions/techAction'

const TechnicianSelect = ({ tech, fetchTech }) => {

    useEffect(() => {
        fetchTech()
        //eslint-disable-next-line
    }, [])

    return (
        !tech.loading && tech.techs !== null &&
        tech.techs.map(t =>
            <option key={t.id} value={t.firstname + t.lastname}>
                {t.firstname} {t.lastname}
            </option>
        ))
}

TechnicianSelect.propTypes = {
    tech: PropTypes.object.isRequired,
    fetchTech: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { fetchTech })(TechnicianSelect)
