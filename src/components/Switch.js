import React, { useState, useEffect } from 'react'
import './Switch.css'

const Switch = (props) => {

    const [status,setStatus] = useState()
    
    useEffect(() => {
            props.onPassData(status);
    },[status])

    return(
        <div className="switch">
            <div className="cel">
            <input type="radio" className="radio" name="switch" value="Celcius" onChange={() => setStatus("cel")}></input><label>Celcius</label>
            </div>
            <div className="fah">
            <input type="radio" className="radio" name="switch" value="Fahrenheit" onChange={() => setStatus("fah")}></input><label>Fahrenheit</label>
            </div>
        </div>
    )
}

export default Switch;