import React, { useState, useEffect } from 'react'
import './Arrow.css'
import left from '../Images/left.png'
import right from '../Images/right.png'

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
                {lefttArrow?<button type="submit" onClick={handleLeft}><img src={left} className="left"></img></button>:null}
            </div>
            <div className="arr2">
               {rightArrow?<button onClick={handleRight}><img src={right} className="right"></img></button>:null} 
            </div>
        </div>
    )
}

export default Arrow;