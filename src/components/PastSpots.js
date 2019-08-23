import React from 'react'
import Card from './Card'

export default function PastSpots(props) {
    const spots = props.spots.map(spot => {
        return <Card key={spot.id} 
                    spot={spot} 
                    addFavorite={props.addFavorite}
                    populateUpdateForm={props.populateUpdateForm}
                    updateSpot={props.updateSpot}
                    deleteSpot={props.deleteSpot}
                />
    })
    return (
        <React.Fragment>
            <h1>Past Spots</h1>
            <main className='spots-container'>
                {spots}
            </main>
        </React.Fragment>
    )
}