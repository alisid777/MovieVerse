import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg";
//c032e2d7
import MovieCard from './MovieCard';

const movie = {
  "Title": "Batman Begins",
  "Year": "2005",
  "imdbID": "tt0372784",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}


 const API_URL = "http://www.omdbapi.com/?apikey=c032e2d7";

function App() {
  const [movies, setMovies] = useState([]);
  const [searcTerm, setSearchTerm] = useState("");

  const searchMovies= async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('Batman')
  }, [])
  return(
    <div className='div'>
      <h1>MovieVerse</h1>
      <div className='search'>
        <input placeholder='search for movies' value={searcTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={()=>searchMovies(searcTerm)}/>
      </div>

  {
    movies?.length > 0
    ? (
      <div className='container'>
        {
          movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))
        }
      </div>
    ): (
      <div className='empty'>
        <h2>No movies Found</h2>
      </div>
    )
  }  

</div>
  );
}



export default App;
