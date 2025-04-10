import React from 'react'

function MovieCard({movie}) {

    function OnLike(){
        alert("CLicked")
    }

    return (
        <>
            <div className='movie-card'>
                <div className='movie-poster'>
                    <img src={movie.url} alt={movie.title} />
                    <div>
                        <button className= "btn" onClick={OnLike}>❤️</button>
                    </div>
                </div>
                <div className='movie-info'>
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard
