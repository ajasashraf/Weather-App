import React, { useEffect, useState } from 'react'
import './App.css'
import  axios  from 'axios';
function Home() {
  const [data,setData]=useState({
    celcius:10,
    name:'London',
    humidity:10,
    speed:2,
    image:'/Images/cloud4.jpg'
  })

  const [name,setName]=useState('');
  const [error,setError]=useState('')

  const handleClick=()=>{
    if(name!==""){
      const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=4df0c2bf78a09b7b3467a157a8a74a02&&units=metric`
    axios.get(apiUrl)
    .then(res=>{
      let imagePath='';
      if(res.data.weather[0].main=='Clouds'){
        imagePath="/Images/cloud4.jpg"
      }else if(res.data.weather[0].main=="Clear"){
        imagePath="/Images/cloud5.jpg"
      }else if(res.data.weather[0].main=="Rain"){
        imagePath="/Images/cloud2.png"
      }else if(res.data.weather[0].main=="Drizzle"){
        imagePath="/Images/cloud3.png"
      }else if(res.data.weather[0].main=="Mist"){
        imagePath="/Images/cloud1.png"
      }else{
        imagePath="/Images/cloud4.jpg"
      }



      setData({
      ...data,celcius:res.data.main.temp,name:res.data.name,
      humidity:res.data.main.humidity,speed:res.data.wind.speed,image:imagePath})
      setError("")
    })
    .catch(err=>{
      if(err.response.status==404){
        setError("Invalid City Name")
      }else{
        setError("")
      }
      console.log(err)});
    }
  }

  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name' onChange={e=>setName(e.target.value)}/>
                <button> <img src='/Images/search-icon-free-vector.jpg' alt='' onClick={handleClick}/></button>
            </div>
            <div className='error'>
              <p>{error}</p>
            </div>
            <div className='winfo'>
                <img src={data.image} alt='' className='icon'/>
                <h1>{Math.round(data.celcius)}°C</h1>
                <h2>{data.name}</h2>
              <div className='details'>
                <div className='col'>
                  <img src='/Images/humidity.jpg' alt=''/>
                  <div className='humidity'>
                    <p>{Math.round(data.humidity)}%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className='col'>
                <img src='/Images/wind.png' alt=''/>
                  <div className='wind'>
                    <p>{Math.round(data.speed)}km/h</p>
                    <p>Wind</p>
                  </div>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
