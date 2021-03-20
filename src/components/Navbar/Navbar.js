import React from 'react'
import NavLink from './NavLink'
import SpringLogo from './SpringLogo'

function Navbar() {
    return (
        <nav className='navbar'>
                <div className='nav-container'>
                    
                    <SpringLogo />

                    <input id='hamburger' className='hamburger-checkbox' type="checkbox" />

                    <ul className='nav-links'>
                        <NavLink name="Home" path='/home' delay={100} />
                        <NavLink name="Cocktails" path='/home' delay={200} />
                        <NavLink name="Coffees" path='/home' delay={300} />
                        <NavLink name="About us" path='/home' delay={400} />
                    </ul>

                    <label htmlFor='hamburger' className='hamburger-toggle'>
                        <span></span>
                    </label>
                      
                </div>
            </nav>
    )
}

export default Navbar
