import React from 'react'
import "./Products.css"
import Product from "./Product/Product"

function Products({setshowOldprice}) {
  return (
    <div>
      <div className="row">
          <Product setshowOldprice={setshowOldprice}/>
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  )
}

export default Products