import React, {useContext, useEffect} from "react";

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({children}) => {

  // useEffect(() => {
  //   console.log("fetch some data")
  //   fetch('https://randomuser.me/api/').then(
  //     (data) => {
  //       console.log(data.json())
  //     }
  //   )
  // }, [])

    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
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