import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default function Home() {
    return (
        <React.Fragment>
            <h1>Parking Tracker Home</h1>
            <p className='home-p'>
                We all need a helping hand from time to time. 
                Let this app be the help you need to remember where 
                your chosen mode of transportation is patiently waiting for your return.
            </p>
            <Link className='link' to='/new/'>Add New Parking Spot</Link>
            <Link className='link' to='/current/'>See Current Parking Spot</Link>
        </React.Fragment>
    )
}