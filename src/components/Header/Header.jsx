import {React, useContext} from "react";
import logo from "../../assets/Header/logo.svg";
import Searchicon from "../../assets/Header/search.png";
import Carticon from "../../assets/Header/icon-cart.svg";
import Usericon from "../../assets/Header/icon-user.svg";
import Grid from "../../assets/Header/menu.png";
import cat1 from "../../assets/category-1.svg"
import "./Header.css";

function Header() {


  return (
    <div className="main-header">
      <div className="header">
        <div className="row ">
          <div className="col-md-2">
            <div className="logo">
              <img src={logo} alt="" srcset="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="searchbar">
              <span>
                Search
                <i class="fa-solid fa-angle-right"></i>
              </span>
              <input type="text" name="" id="" />
              <img className="searchicon" src={Searchicon} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-header d-flex">
            <div className="user-account">
                <img src={Usericon} alt="" srcset="" />
                <span className="cart-text">My Order</span>
              </div>
              <div className="cart position-relative">
                <img src={Carticon} alt="" srcset="" />
                <span className="cart-count">2</span>
                <span className="cart-text">Cart</span>
              </div>
              <div className="user-account">
                <img src={Usericon} alt="" srcset="" />
                <span className="cart-text">Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="row">
          <div className="col-md-2">
            <button className="allproducts">
              {/* <i class="fa-solid fa-grid"></i> */}
              <img src={Grid} alt="" srcset="" />
              <span>All Products</span>
      
            </button>
          </div>
          <div className="col-md-10">
            <div className="navbar">
              <ul className="mb-0 d-flex">
                <li className="navbar-links">
                  <i class="fa-solid fa-fire"></i>
                  Deals
                </li>
                <li className="navbar-links">
                <i class="fa-solid fa-house"></i>
                  Home
                </li>
                <li className="navbar-links">
                <i class="fa-solid fa-books"></i>
                  About
                </li>
                <li className=" navbar-links position-relative category" >
                  Categories
                  <i class="fa-solid fa-angle-down px-2 arrow-icon"></i>
                  <div className="category-dropdown">
                  <ul className="mb-0">
                    <li className="float-right">
                      <img src={cat1} alt="" />
                      Milk And Dairy
                    </li>
                    <li className="float-left">
                      <img src={cat1} alt="" />
                      Milk And Dairy
                    </li>
                    <li>
                      <img src={cat1} alt="" />
                      Milk And Dairy
                    </li>
                    <li>
                      <img src={cat1} alt="" />
                      Milk And Dairy
                    </li>
                    <li>
                      <img src={cat1} alt="" />
                      Milk And Dairy
                    </li>
                  </ul>
                </div>
                </li>
                <li className="contact navbar-links ">
                <i class="fa-solid fa-phone"></i>
                  Contact US
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default Header;
