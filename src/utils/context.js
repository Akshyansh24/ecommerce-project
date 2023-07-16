import {createContext, useState} from "react";
export const Context = createContext();

const AppContext = ({children}) =>{

const [showOldprice , setshowOldprice] = useState(true);

        return (
            <Context.Provider value={{
                showOldprice,
                setshowOldprice,
                }}>
                {children}
            </Context.Provider>
        )
}

export default AppContext;
