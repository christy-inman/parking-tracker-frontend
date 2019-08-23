import React from 'react'
import Card from './Card'

export default function Favorites(props){
    const favorites = props.favorites.map(spot => {
        return <Card key={spot.id} spot={spot} />
    })
    return (
        <React.Fragment>
            <h1>Favorite Spots</h1>
            <main className='favorites-container'>
                {favorites}
            </main>
        </React.Fragment>
    )
}