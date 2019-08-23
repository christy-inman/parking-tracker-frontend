import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default function NotFound() {
    return (
        <React.Fragment>
            <h1>
                Unfortunately you've taken a turn in the wrong direction.
            </h1>
            <p>
                It appears this path does not exist. 
                Let's get you back on the right road.
                Choose your next route below.
            </p>
            <Link className='link' to='/'>Return Home</Link>
            <Link className='link' to='/current/'>See Current Parking Spot</Link>
            <Link className='link' to='/new/'>Save a New Parking Spot</Link>
        </React.Fragment>
    )
}