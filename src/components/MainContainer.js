import React from 'react'
import Card from './Card'

export default function MainContainer(props) {
    // let spots = props.spots
    const currentSpot = props.spots[props.spots.length - 1]
    console.log("LAST", currentSpot)
    return (
        <React.Fragment>
            <h1>Current Spot</h1>
            <Card spot={currentSpot} />
        </React.Fragment>
    )
}