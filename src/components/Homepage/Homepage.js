import './style/style.css';
import React from 'react'
import Navbar from './Navbar';

function Homepage() {



    return (
        <header className='homepage-section'>
            <Navbar />

            <div className='homepage-container'>

                    <div className='slogan'>
                        <h1>The ministry of cocktails</h1>
                        <h3>Meet our family, the <b>#HibouPeople</b></h3>
                    </div>
                    
                    <div className='action-button-container'>
                        <button className='action-button'>See our story</button>
                    </div>

            </div>

        </header>
    )
}

export default Homepage
