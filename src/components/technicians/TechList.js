import React, { useEffect } from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchTech } from '../../actions/techAction'

const TechList = ({ tech, fetchTech }) => {

    useEffect(() => {
        fetchTech()
        //eslint-disable-next-line
    }, [])


    return (
        <div className='modal' id='tech-list-modal' style={{ height: 'auto' }}>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Technicians List</h4>
                <ul className='collection'>
                    {!tech.loading && tech.techs.length === 0 ? (<h6 style={{ textAlign: 'center' }} >No Technicians....</h6>) : (
                        tech.techs.map(tech => <TechItem key={tech.id} tech={tech} />)
                    )}
                </ul>
            </div>
        </div>
    )
}

TechList.prototype = {
    tech: PropTypes.object.isRequired,
    fetchTech: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { fetchTech })(TechList)
