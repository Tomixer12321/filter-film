import { useState, useEffect } from "react"
import allMovies from "./data"


const App = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredMovies,setFilteredMovies]= useState([])

  useEffect(()=>{
    const moviesAlfterFilter=allMovies.filter((oneMovie)=>{
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredMovies(moviesAlfterFilter)
  },[searchingText])  


  return <div>
    <form>
      <input type="text" placeholder="Hledaný film" onChange={
        (e) => setSearchingText(e.target.value)
      }/>
    </form>
    <div>
      {filteredMovies.map( (oneMovie) => {
        const {id, image, title, age, tags, description } = oneMovie

        return <div key={id}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
        </div>
      } )}
    </div>


  </div>
}


export default App