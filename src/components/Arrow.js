import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Arrow.css'

const Arrow = (props) => {

    const [ctr,setCtr] = useState(0)
    const [lefttArrow,setLeftArrow] = useState(false)
    const [rightArrow,setRightArrow] = useState(true)

    const handleRight = () => {
        setCtr(ctr + 3)
    }

    useEffect(() => {
        props.onPassData(ctr);
        ctr >= 3 ? setLeftArrow(true): setLeftArrow(false)
        ctr >= 39 ? setRightArrow(false): setRightArrow(true)
    }, [ctr])

    const handleLeft = () => {
        setCtr(ctr - 3)
    }

    return(
        <div className="arrow">
            <div className="arr1">
                {lefttArrow?<FontAwesomeIcon className="fas fa-camera fa-2x" icon={faArrowLeft} onClick={handleLeft} />:null}
            </div>
            <div className="arr2">
               {rightArrow?<FontAwesomeIcon className="fas fa-camera fa-2x" icon={faArrowRight} onClick={handleRight} />:null} 
            </div>
        </div>
    )
}

export default Arrow;