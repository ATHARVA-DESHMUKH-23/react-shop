import React from 'react'
import list from '../data.js'
import Shopcart from './shopcart.jsx'

const Amazon = ({handleClick}) => {
    
  return (
    <section>
        {list.map((list) => (
            <Shopcart item={list} key={list.id} handleClick = {handleClick}/>
        ))}
    </section>
  )
}

export default Amazon
