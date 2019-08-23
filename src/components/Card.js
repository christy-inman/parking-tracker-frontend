import React from 'react'

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
    const handleDeleteClick = () => {
        props.deleteSpot(spot)
    }
    return (
        <div className='parking-spot-card'>
            <h2>{spot.cross_streets}</h2>
            <p>{parseDate()}</p>
            <p>{spot.notes}</p>
            <button onClick={handleFavoriteClick}>Add to Favorite Spots</button>
            <button onClick={handleDeleteClick}>Delete This Spot</button>
        </div>
    )
}