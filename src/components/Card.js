import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

export default function Card(props) {
    const {spot} = props

    Array.prototype.move = function(from,to){
        this.splice(to,0,this.splice(from,1)[0])
        return this
    }
    const parseDate = () => {
        const date = spot.day
        const parsedDate = date.split('T')
        const day = parsedDate[0].split('-').move(0,3).join('/')
        return day
    }
    const handleFavoriteClick = () => {
        props.addFavorite(spot)
    }
    const handleUpdateClick = () => {
        // const spotInfo = {
        //     cross_streets: `${spot.cross_streets}`,
        //     day: `${spot.day}`,
        //     notes: `${spot.notes}`
        // }
        console.log('step 1', spot)
        props.populateUpdateForm(spot)
    }
    const handleDeleteClick = () => {
        props.deleteSpot(spot.id)
        window.location.reload()
    }
    return (
        <div className='parking-spot-card'>
            <h2>{spot.cross_streets}</h2>
            <p>{parseDate()}</p>
            <p>{spot.notes}</p>
            <button onClick={handleFavoriteClick}>Add to Favorite Spots</button>
            <Link onClick={handleUpdateClick} className='update' to='/update/'>Update This Spot</Link>
            <button onClick={handleDeleteClick}>Delete This Spot</button>
        </div>
    )
}