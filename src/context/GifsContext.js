import React, { useState } from "react";

const Context = React.createContext({});

export function GifsContext({children}){
  
  const [gifs, setGif] = useState([])
  
  return <Context.Provider value={{gifs, setGif}}>
    {children}
  </Context.Provider>
}
export default Context