import React from 'react'
import "../css/MovieCard.css"

function MovieCard({movie}) {

    function OnLike(){
        alert("CLicked")
    }

    return (
        <>
            <div className='movie-card'>
                <div className='movie-poster'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div>
                        <button className= "favorite-btn" onClick={OnLike}>❤️</button>
                    </div>
                </div>
                <div className='movie-info movie-overlay'>
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split('-')[0]}</p> 
                </div>
            </div>
        </>
    )
}

export default MovieCard
