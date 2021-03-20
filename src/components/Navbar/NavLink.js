import React from 'react'
import { Spring } from 'react-spring/renderprops';

function NavLink({name, path, delay}) {
    return (
        <Spring
        from={{opacity: 0, marginTop: '-100%'}}
        to={{opacity: 1, marginTop: '0%'}}
        config={{delay}}
        >
            {
                props => (
                    <div style={props}>
                        <li><a href={path}>{name}</a></li>
                    </div>
                )
            }
        </Spring>
    )
}

export default NavLink
