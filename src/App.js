import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Header from "../src/components/Header/Header"
import AppContext from './utils/context';
import Home from "../src/components/Home/Home"
import Contact from './components/Contact/Contact';
import Category from './components/Category/Category';
import Newletter from './components/Home/Newletter/Newletter';
import Features from './components/Home/Features/Features';
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Success from './components/Success/Success';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import PrivateRoute from './components/Routes/Private';
function App() {
  return (
      <div>
             
              <BrowserRouter>
                <AppContext>
                <ToastContainer />
                  <Header/>
                  <Routes>
                      <Route>
                        <Route path="/" element ={<Home/>}/>  
                        <Route path="/contact" element ={<Contact/>}/>  
                        <Route path="/Category/:id" element ={<Category/>}/>  
                        <Route path="/product/:id" element ={<SingleProduct/>}/>  
                        <Route path="/login" element ={<Login/>}/>  
                        <Route path="/signup" element ={<Register/>}/>  
                        <Route path="/admin" element ={<PrivateRoute/>}>
                           <Route path="" element ={<AdminDashboard/>}/> 
                        </Route> 
                        <Route path="/success" element={<Success/>}/>
                          
                      </Route>
                  </Routes>
                  <Newletter/>
                 <Features/>
                </AppContext>
              </BrowserRouter>
      </div>
  );
}

export default App;
