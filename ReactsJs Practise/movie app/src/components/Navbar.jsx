import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-brand'>
                    <Link>Movie app</Link>
                </div>
                <div className='navbar-links'>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/favorites" className='nav-link '>Favorites</Link>
                </div>

            </div>
        </>
    )
}

export default Navbar
