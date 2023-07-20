import {createContext, useState, useEffect} from "react";
import axios from "axios";
export const Context = createContext();

const AppContext = ({children}) =>{

const [showOldprice , setshowOldprice] = useState(true);
const[showOk, setShowOk] = useState(false);
const [auth,setAuth] = useState(
    {user:null,
    token:""}
);


// default axios
axios.defaults.headers.common["Authorization"] = auth?.token




useEffect(() => {
    const data = localStorage.getItem('auth');
    if(data){
        const parseData = JSON.parse(data)
        setAuth({
            ...auth,
            user:parseData.user,
            token: parseData.token
        })
    }

}, [])

        return (
            <Context.Provider value={{
                showOldprice,
                setshowOldprice,
                auth,
                setAuth,
                showOk,
                setShowOk,
                }}>
                {children}
            </Context.Provider>
        )
}

export default AppContext;
