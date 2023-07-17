import React from 'react'
import "./Cart.css"
import Cartitem from './Cartitem/Cartitem'

function Cart({showCart, setShowCart}) {
  return (
    <div className='cartpanel'>
        <div className="opac-layer"></div>
        <div className={`cart-content  ${ showCart ? '' :'removeCart' }`}>
            <div className="cart-header">
                  <span className="heading">Shopping Cart</span>
                  <span className="close-btn" onClick={()=>{setShowCart(false)}}>
                  <i class="fa-solid fa-x"></i>
                  </span>
              </div>
              {/* <div className="empty-cart">
              <i class="fa-solid fa-cart-plus"></i>
              <span>No Product in the cart</span>
                <button onClick={()=>{setShowCart(false)}} className="return-cta">Return To Shop</button>
              </div> */}
              <Cartitem/>
              <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377; 5000</span>

                    </div>
                    <div className="button">
                        <button className="checkout-cta" >Checkout</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Cart