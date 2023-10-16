import React from 'react'

//Here instead of using props we destructured the prop and got its property called Batman and then use the Batman

const MovieCard = ({movie}) => {
  return (
    <div className='movie'>
    <div>
      <p>{movie.Year}</p>
    </div>
    <div>
      <img src={movie.Poster} alt='Batman Begins Begins'/>
    </div>
    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>
  </div>
  )
}

export default MovieCard