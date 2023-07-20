import React from 'react'
import "./Product.css"
import prod1default from "../../../assets/Products/product-1-1.jpg"
import prod1hover from "../../../assets/Products/product-1-2.jpg"


function Product(setshowOldprice) {


  return (
    <div className='col-md-3'>
        <div className="product-card mt-3">
          <span className='badge'>Hot</span>
          <div className="product-img position-relative">
              <img src={prod1default} alt="" />
              <img src={prod1hover} alt="" />
          </div>
          <div className="product-content">
              <div className="product-category">
                <p>Snacks</p>
              </div>
              <h2 >Seeds of Change Organic Quinoa, Brown, & Red Rice </h2>
              <span className='font-small text-muted'>By NestFood</span>
          </div>
          <div className="product-bottom mt-2">
            <div className="product-price">
              <span>$28.85</span>
              {/* {!setshowOldprice ? <span className='old-price'>$32.8</span> : ""} */}
            </div>
            <div className="view-product">
              
              <button> <i className="fa-solid fa-eye"></i> View</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product