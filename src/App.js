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
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
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

  return (
    <div className="App">
            <Switch onPassData={fetchStatus}/>
            <Arrow onPassData={fetchCtr}/>
            {post?<WeatherCard data={post} ctr={ctr} status={status}/>:<Loader />}            
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
