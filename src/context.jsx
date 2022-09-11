import React, {useContext, useEffect} from "react";
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

    const fetchData = async () => {
      axios.get(allMealsUrl).then((response) => {
        console.log(response.data)
      })
    }
  
  useEffect(() => {
    fetchData()
  },[])
  
  return <AppContext.Provider value={{name:"soul", occupation:"student"}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext,AppProvider, allMealsUrl, randomMealUrl }