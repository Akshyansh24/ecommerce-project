import React from "react";
import "./Category.css";
import Products from "../Products/Products";
function Category() {
  return (
    <div>
      <div className="category-banner">
        <div className="row">
          <div className="col-md-4">
            <h1>Snacks</h1>
          </div>
          <div className="col-md-8 d-flex justify-content-end">
            <div className="breadcrumbs">
                <span className="breadcrumb-first"><i class="fa-solid fa-house"></i> Home</span>
                <span><i class="fa-solid fa-angle-right"></i></span>
                <span>Category</span>
                <span><i class="fa-solid fa-angle-right"></i></span>
                <span>Type Categories</span>
            </div>
          </div>
        </div>
      </div>
      <div className="category-products">
        <p className="total-products">We Found <span>{`${29}`}</span> Products For You !</p>
        <Products/>
      </div>
    </div>
  );
}

export default Category;
