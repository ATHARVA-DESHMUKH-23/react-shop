import React from 'react'
import "../styles/shopcart.css"

const Shopcart = ({item,handleClick}) => {
    const { title, price, img } = item;
   
    return (
        
            <div className="cards">
                <div className="image_box">
                    <img src={img} alt="" className="imgbottle" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>${price}</p>
                    <button onClick={() => handleClick(item)}>Add to Cart</button> {/* Change is here */}
                    </div>
            </div>
        
    )
}

export default Shopcart
