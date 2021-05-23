import React, { useEffect, useState } from 'react'
import Switch from './components/Switch'
import Arrow from './components/Arrow'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader';
import { Bar } from 'react-chartjs-2';
import './App.css'

function App() {

  const [post,setPost] = useState(null)
  const [ctr,setCtr] = useState(0);
  const [status,setStatus] = useState()
  const [data,setData] = useState({})
  let labels = [];
  let temperatures = [];
  const [temp,setTemp] = useState()
  const [weather,setWeather] = useState()

  useEffect(() =>{
    setTimeout(() => {
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
      .then(response => response.json())
      .then(response => {
        setPost(response.list) ;
        let ctr = 0;
      for(const obj of response.list){
        ctr++;
        let t = obj.dt_txt.split(' ')[1];
        if(ctr<2){
          setWeather(obj.main.temp)
        }
       if(ctr<=8){
        labels.push(t);
       temperatures.push(obj.main.temp);
       }
      }

      setData({ labels: labels,
        datasets: [
          {
            label: 'Weather',
            data: temperatures,
            backgroundColor:[
              '#5A7CFB',
              '#5A7CFB',
              '#5A7CFB',
              '#5A7CFB',
              '#5A7CFB',
              '#5A7CFB',
              '#5A7CFB'
            ]
          }
        ]
      })
    })
    },900)
  },[])

  const fetchCtr = (val) => {
      setCtr(val);
  }
  
  const fetchStatus = (st) => {
      setStatus(st);
  }

  const activeTemp = (temper) => {
    setTemp(temper);
  }

  return (
    <div className="App">
      <div className="first">
          <div className="title">
          <h2 className="header">MUNICH</h2>
          <h3 className="subheader">GERMANY</h3>
          </div>
          <div className="temp"> 
              {temp?(() => {
                <h3>{temp}</h3>
            if (temp>288) {
              return (
                <div>
                 <h3>{temp}</h3>
                <h3>Sunny</h3>
                </div>
              )
            } else if (temp>287) {
              return (
                <div>
                 <h3>{temp}</h3>
                <h3>Clouds</h3>
              </div>
              )
            } else {
              return (
                <div>
                 <h3>{temp}</h3>
                <h3>Rain</h3>
                </div>
              )
            }
        })():(() => {
          <h3>{weather}</h3>
          if (weather>288) {
            return (
              <div>
                 <h3>{weather}</h3>
              <h3>Sunny</h3>
              </div>
            )
          } else if (weather>287) {
            return (
              <div>
                 <h3>{weather}</h3>
              <h3>Clouds</h3>
              </div>
            )
          } else {
            return (
              <div>
                 <h3>{weather}</h3>
              <h3>Rain</h3>
              </div>
            )
          }
      })()}
      </div>
          <div className="components">
          <Switch onPassData={fetchStatus}/>
            <Arrow onPassData={fetchCtr}/>
            </div>
      </div>
              <div>
            {post?<WeatherCard data={post} onPassData={activeTemp} ctr={ctr} status={status}/>:<Loader />}            
            </div>
            <div className="barchart">
            <Bar
            data={data}
            options={{ 
              title: {
                display:true,
                text: 'Weather Chart',
                fontSize:25
              },
              legend: {
                display:true,
                position:'bottom'
              },
              responsive: true,
              maintainAspectRatio: false
             }
            }
          />
          </div>     
    </div>
  );
}

export default App;
