import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "john wick", release_date: "2003" },
        { id: 2, title: "terminator", release_date: "2003" },
        { id: 3, title: "avenger", release_date: "2003" },
        { id: 4, title: "thor", release_date: "2003" },
        { id: 5, title: "john wick", release_date: "2003" }
    ];

    function handleClick(e) {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <>
            <div className='home'>
                <form action="" onSubmit={handleClick} className='search-form'>
                    <input type="text" className='search-input' placeholder='Search for Movies....' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                    <button className='search-button' type='submit'>Search</button>
                </form>

                <div className='movies-grid'>
                    {movies.map((movie) => (
                      movie.title.toLowerCase().startsWith(searchQuery) &&  <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
