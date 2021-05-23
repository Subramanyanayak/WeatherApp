import React, { useEffect, useState } from 'react'
import Card from './Card'
import './WeatherCard.css'

const WeatherCard = (props) => {

    var ctr = 0;
    let [index,setIndex] = useState(0)
    let [status,setStatus] = useState()

    useEffect(() => {
        setIndex(props.ctr)
    },[props.ctr])

    useEffect(() => {
        setStatus(props.status);
    },[props.status])

    const handleClick = (temp, type) => {
        props.onPassData(temp, type);
    }

    return(
        <div className="weathercard">    
           { props.data.map(obj => {
                let d = obj.dt_txt.split(' ')[0];
                let t = obj.dt_txt.split(' ')[1];
                let cel = (obj.main.temp - 273.15).toFixed(2);
                let type = obj.weather[0].main;
                ctr++;            
             if(ctr>index && ctr<=index+3)
            return( <div onClick={handleClick.bind(this, cel, type)}>
             <Card date={d} icon={obj.weather[0].main} temp2={obj.main.temp} temp={status == 'cel'?parseFloat(obj.main.temp - 273.15).toFixed(2) : ((obj.main.temp - 273.15) * 9/5 + 32).toFixed(2) } time={t}/>
           </div>)
           })}
        </div>
    )
}

export default WeatherCard;