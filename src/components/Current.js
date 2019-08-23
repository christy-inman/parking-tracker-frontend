import React from 'react'
import Card from './Card'

export default function Current(props) {
    const currentSpot = props.spots[props.spots.length - 1]
    return (
        <React.Fragment>
            <h1>Current Spot</h1>
            <Card 
                spot={currentSpot} 
                addFavorite={props.addFavorite}
                populateUpdateForm={props.populateUpdateForm}
                updateSpot={props.updateSpot}
                deleteSpot={props.deleteSpot}
            />
        </React.Fragment>
    )
}