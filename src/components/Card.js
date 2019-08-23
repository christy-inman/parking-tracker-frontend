import React from 'react'

export default function Card(props) {
    const {spot} = props

    Array.prototype.move = function(from,to){
        this.splice(to,0,this.splice(from,1)[0])
        return this
    }
    const parseDate = () => {
        const date = props.spot.day
        const parsedDate = date.split('T')
        const day = parsedDate[0].split('-').move(0,3).join('/')
        return day
    }
    const handleFavoriteClick = () => {
        props.addFavorite(spot)
    }
    return (
        <div className='parking-spot-card'>
            <h2>{props.spot.cross_streets}</h2>
            <p>{parseDate()}</p>
            <p>{props.spot.notes}</p>
            <button onClick={handleFavoriteClick}>Add to Favorite Spots</button>
            <button>Delete This Spot</button>
        </div>
    )
}