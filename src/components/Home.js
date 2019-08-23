import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
            <h1>Welcome Home</h1>
            <p>
                some paragraph about what this app 
                does and how to use it
            </p>
            <Link className='link' to='/new/'>Add New Parking Spot</Link>
            <Link className='link' to='/current/'>See Current Parking Spot</Link>
        </React.Fragment>
    )
}