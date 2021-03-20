import React from 'react'
import { Spring } from 'react-spring/renderprops'

function SpringSlogan() {
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
        >
            {
                props => (
                    <div className='homepage-container' style={props}>
                        <div className='slogan'>
                            <h1>The ministry of cocktails</h1>
                            <h3>Meet our family, the <b>#HibouPeople</b></h3>
                        </div>
                    
                        <div className='action-button-container'>
                            <button className='action-button'>See our story</button>
                        </div>
                    </div>
                )
            }
        </Spring>
    )
}

export default SpringSlogan
