import React, {useContext, useEffect} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  useEffect(() => {
    console.log("fetch some data")
  }, [])
  
  return <AppContext.Provider value={{name:"soul", occupation:"student"}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext,AppProvider }