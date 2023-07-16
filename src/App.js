import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Header from "../src/components/Header/Header"
import AppContext from './utils/context';
import Home from "../src/components/Home/Home"
function App() {
  return (
      <div>
          <div>
              <BrowserRouter>
                <AppContext>
                  <Header/>
                  <Routes>
                      <Route>
                        <Route path="/" element ={<Home/>}/>  
                      </Route>
                  </Routes>
                </AppContext>
              </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
