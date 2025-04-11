import React, { useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';
import "../css/Home.css"
import { getPopularMovies, searchMovies } from '../service/api';

function Home() {

    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError("failed to load movies...")
            } finally {
                setloading(false)
            }
        }
        loadPopularMovies()
    }, [])


    const handleClick = async(e)=> {
        e.preventDefault()
        // alert(searchQuery)
        if (!searchQuery.trim()) return
        if(loading) return 
        setloading(true)

        try{
            const searchResult=await searchMovies(searchQuery)
            setMovies(searchResult)
            setError(null)
        }catch(err){
            console.log(err);
            setError("failed to search movies....")
        }finally{
            setloading(false)
        }
        setSearchQuery("")
    }


    return (
        <>
            <div className='home'>
                <form action="" onSubmit={handleClick} className='search-form'>
                    <input type="text" className='search-input' placeholder='Search for Movies....' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <button className='search-button' type='submit'>Search</button>
                </form>

                    {error && <div className='error-message'>{error}</div>}

                {loading ? (<div className='loading'>loading...</div>) : (<div className='movies-grid'>
                    {movies.map((movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>)}
            </div>
        </>
    )
}

export default Home
