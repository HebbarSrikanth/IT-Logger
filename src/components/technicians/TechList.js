import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechList = () => {

    const [state, setState] = useState({
        techs: [],
        loading: false
    })

    useEffect(() => {
        getTechs()
        //eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        //Set loading to true as it has to fetch the data
        setState({
            ...state,
            loading: true
        })

        //Fetch the data from the backend server
        const res = await fetch('/techs')
        const data = await res.json();

        //Once the data is received then ,set log to logs and loading to false
        setState({
            ...state,
            techs: data,
            loading: false
        })
    }

    return (
        <div className='modal' id='tech-list-modal' style={{ height: 'auto' }}>
            <div className='modal-content'>
                <h4 style={{ textAlign: 'center' }}>Technicians List</h4>
                <ul className='collection'>
                    {!state.loading && state.techs.length === 0 ? (<h4>No Technicians....</h4>) : (
                        state.techs.map(tech => <TechItem key={tech.id} tech={tech} />)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TechList
