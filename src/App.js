import React, { useEffect, useState } from 'react'
import Switch from './components/Switch'
import Arrow from './components/Arrow'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader';

function App() {

  const [post,setPost] = useState(null)
  const [ctr,setCtr] = useState(0);
  const [status,setStatus] = useState()

  useEffect(() =>{
    setTimeout(() => {
      fetch('http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40')
      .then(response => response.json())
      .then(response => setPost(response.list)) ;
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
    </div>
  );
}

export default App;
