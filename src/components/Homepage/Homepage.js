import './style/style.css';
import React from 'react'
import Navbar from '../Navbar/Navbar';
import SpringSlogan from './SpringSlogan';

function Homepage() {

    return (
        <header className='homepage-section'>
            <Navbar />
            <SpringSlogan />
        </header>
    )
}

export default Homepage
