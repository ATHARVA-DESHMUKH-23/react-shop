import React from 'react'
import Navbar from './cartcomponent/navbar'
import Amazon from './cartcomponent/amazon'
import { useState } from 'react'
import Cart from './cartcomponent/cart'
const Cartform = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  const handleClick = (item) => {
    console.log("handle click funct called", {item})
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    let size = cart.length
    console.log({size})
  }
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <div>
      <Navbar setShow={setShow}  size={cart.length}/>
      {show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}

    </div>
  )
}

export default Cartform