import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {
  const [meals,setMeals] = useState([])
  const [loading,setLoading] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')
  
  allMealsUrl 

    const fetchMeals = async (url) => {
      setLoading(true)
      try {
        const {data} = await axios(url)
        if(data.meals){
        setMeals(data.meals)
          console.log(data)
        }else{
        setMeals([])
          
        }
         
      } catch (e) {
        console.log(e.response)
      }
      setLoading(false)
      }
    
  useEffect(() => {
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  },[searchTerm])
  
  return <AppContext.Provider value={{loading , meals,setSearchTerm}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext,AppProvider, allMealsUrl, randomMealUrl }