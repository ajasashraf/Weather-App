import React from 'react'
import './App.css'
function Home() {
  return (
    <div className='container'>
        <div className='weather'>
            <div className='search'>
                <input type='text' placeholder='Enter City Name' />
                <button> <img src='/Images/search-icon-free-vector.jpg' alt=''/></button>
            </div>
            <div className='winfo'>
                <img src='/Images/pngtree-3d-clouds-png-image_4561078.png' alt='' className='icon'/>
                <h1>22°c</h1>
                <h2>London</h2>
              <div className='details'>
                <div className='col'>
                  <img src='/Images/humidity.jpg' alt=''/>
                  <div className='humidity'>
                    <p>20%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className='col'>
                <img src='/Images/wind.png' alt=''/>
                  <div className='wind'>
                    <p>2 km/h</p>
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
