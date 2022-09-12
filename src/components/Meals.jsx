import { useGlobalContext } from "../context"

const Meals = () => {
  
const {meals} = useGlobalContext()
  
  return(
    <section  className="section-center">
      {meals.map((meal) => {
      const {idMeal, strMeal:title, strMealThumb: image} = meal
      return <article className="single-meal" key={idMeal}>
        <img src={image} className="img" style={{width:'200px'}}/>
          <footer>
            <h5>{title}</h5>
            <button className="like-btn">click me</button>
          </footer>
      </article>
      })
      }
    </section>
  ) 
}

export default Meals