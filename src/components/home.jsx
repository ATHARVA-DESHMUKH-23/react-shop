import React from 'react'
import "./Home.css"
import Cartform from './cartform'

const Home = () => {
  return (
    <div>
      <div className='home_header'>
        <div className="data">
          <div className="header_container">
            <h1>Shampoo</h1>
            <p>Start from top we have got you you coverd </p>
            <button className='Shampoobtn'>Shop Shampoo</button>
          </div>
        </div>
      </div>
      <Cartform />
    </div>
  )
}

export default Home
