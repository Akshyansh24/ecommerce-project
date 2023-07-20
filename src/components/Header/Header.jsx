import {React, useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom"
import logo from "../../assets/Header/logo.svg";
import Searchicon from "../../assets/Header/search.png";
import Carticon from "../../assets/Header/icon-cart.svg";
import Usericon from "../../assets/Header/icon-user.svg";
import Grid from "../../assets/Header/menu.png";
import cat1 from "../../assets/category-1.svg"
import Cart from "../Cart/Cart";
import "./Header.css";
import { Context } from "../../utils/context";
import { toast } from "react-toastify";



function Header() {

  const {auth, setAuth}  = useContext(Context);
  const [scrolled, setScrolled] = useState(true);
  const handleScroll = () =>{
    const offset = window.scrollY
    // console.log(offset)
    if(offset > 200){
        setScrolled(true)
    }else{
        setScrolled(false)
    }
}

const [showCart, setShowCart] = useState(false);
useEffect(()=>{
   window.addEventListener("scroll", handleScroll)
},[]);

const navigate = useNavigate();

const handleLogout = () =>{
  setAuth({
    ...auth, user:null,
    token:'',
  })
  localStorage.removeItem('auth')
  navigate('/login')
  toast.success("Logout Successfully");
}
  return (
    <div className="main-header">
      <div className="header">
        <div className="row ">
          <div className="col-md-2">
            <div className="logo">
              <img src={logo} alt=""  />
            </div>
          </div>
          <div className="col-md-6">
            <div className="searchbar">
              <span>
                Search
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <input type="text" name="" id="" />
              <img className="searchicon" src={Searchicon} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="right-header d-flex">
             { auth.user && <div className="user-account" >
                <img src={Usericon} alt="" />
                <span className="cart-text">My Account</span>
              </div>}
              <div className="cart position-relative" onClick={()=>{
                setShowCart(true);
              }}>
                <img src={Carticon} alt=""  />
                <span className="cart-count">2</span>
                <span className="cart-text">Cart</span>
              </div>
              {!auth.user ? 
              (<div className="user-account" onClick={()=>{
                navigate('/Login');
              }}>
                <img src={Usericon} alt=""  />
                <span className="cart-text">Sign In</span>
              </div>) :
              ( <div className="user-account" onClick={handleLogout}>
                <img src={Usericon} alt=""  />
                <span className="cart-text">Logout</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className={`header-bottom ${ scrolled ? 'sticky-header' :'' }`}>
        <div className="row">
          <div className="col-md-2">
            <button className="allproducts">
              {/* <i className="fa-solid fa-grid"></i> */}
              <img src={Grid} alt=""  />
              <span>All Products</span>
            </button>
          </div>
          <div className="col-md-8">
            <div className="navbar">
              <ul className="mb-0 d-flex">
                <li className="navbar-links">
                  <i className="fa-solid fa-fire"></i>
                  Deals
                </li>
                <li className="navbar-links">
                <i className="fa-solid fa-house"></i>
                  Home
                </li>
                <li className="navbar-links">
                <i className="fa-solid fa-books"></i>
                  About
                </li>
                <li className=" navbar-links position-relative category" >
                  Categories
                  <i className="fa-solid fa-angle-down px-2 arrow-icon"></i>
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
                <i className="fa-solid fa-phone"></i>
                  Contact US
                </li>
              </ul>
            </div>
          </div>

        </div>


      </div>
      { showCart &&   <Cart setShowCart = {setShowCart} showCart={showCart}/>}

    </div>

  );
}

export default Header;
