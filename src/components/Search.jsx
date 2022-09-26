import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {
  const [text,setText] = useState("")
  const {setSearchTerm , fetchRandomMeal} = useGlobalContext()

  function handleChange (e){
    setText(e.target.value)
  }

  function handleSubmit (e){
    e.preventDefault()
    if(text) {
      setSearchTerm(text)
      setText('')
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  
  return(
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={text} className="form-input" type="text" placeholder="Type Favorite Meal" />
        <button type="submit" className="btn">Search</button>
        <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>Suprise me</button>
      </form>
    </header>
  )
}

export default Search