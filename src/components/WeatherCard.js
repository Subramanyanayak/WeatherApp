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

    return(
        <div className="weathercard">        
           { props.data.map(obj => {
                let d = obj.dt_txt.split(' ')[0];
                let t = obj.dt_txt.split(' ')[1];
                ctr++;            
             if(ctr>index && ctr<=index+3)
              return <Card date={d} temp={status == 'cel'?((obj.main.temp - 32)*5/9) : obj.main.temp } time={t}/>
           })}
        </div>
    )
}

export default WeatherCard;