import React from 'react'
import "./Cartitem.css"
import prod1 from "../../../assets/Products/Single-product-1.jpg"

function Cartitem() {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod1} alt="" />
        </div>
        <div className="prod-details">
            <span className="name">Seeds of Change Organic Quinoa, Brown</span>
            <span className='remove-btn'><i className="fa-solid fa-x"></i></span>
            <div className="quantity-buttons">
                        <span >-</span>
                        <span>1</span>
                        <span >+</span>
            </div>
            <div className="text">
                <span>1</span>
                <span>x</span>
                <span className='highlight'>&#8377; 500</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem