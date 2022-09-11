import { useGlobalContext } from "../context"



const Meals = () => {
  
const {meals} = useGlobalContext()
  
  return(
    <section>
      {meals.map((meal) => {
      console.log(meal)
      return<p>
        meal
      </p>
      })
      }
    </section>
  ) 
}

export default Meals