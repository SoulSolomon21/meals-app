import { useGlobalContext } from "../context"

const Meals = () => {
  
const {meals} = useGlobalContext()
  
  return(
    <section>
      {meals.map((meal) => {
      const {idMeal, strMeal:title, strMealThumb: image} = meal
      return <article key={idMeal}>
        <img src={image} />
          <footer>
            <h5>{title}</h5>
            <button>click me</button>
          </footer>
      </article>
      })
      }
    </section>
  ) 
}

export default Meals