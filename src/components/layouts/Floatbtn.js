import React from 'react'

const Floatbtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" className="btn-floating btn-large red modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li><a href="#tech-list-modal" className="btn-floating red modal-trigger"><i className="material-icons">person</i></a></li>
                <li><a href="#add-tech" className="btn-floating yellow darken-1 modal-trigger"><i className="material-icons">person_add</i></a></li>
            </ul>
        </div>
    )
}

export default Floatbtn
