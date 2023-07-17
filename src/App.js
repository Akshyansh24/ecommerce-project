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
function App() {
  return (
      <div>
              <BrowserRouter>
                <AppContext>
                  <Header/>
                  <Routes>
                      <Route>
                        <Route path="/" element ={<Home/>}/>  
                        <Route path="/contact" element ={<Contact/>}/>  
                        <Route path="/Category/:id" element ={<Category/>}/>  
                        <Route path="/product/:id" element ={<SingleProduct/>}/>  

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
