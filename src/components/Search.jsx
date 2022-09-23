import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {
  return(
    <header className="search-container">
      <form>
        <input className="form-input" type="text" placeholder="Type Favorite Meal" />
        <button type="submit" className="btn">Search</button>
        <button className="btn btn-hipster" type="button">Suprise me</button>
      </form>
    </header>
  )
}

export default Search