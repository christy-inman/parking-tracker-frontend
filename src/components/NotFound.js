import React from 'react'

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
            <button>Return Home</button>
            <button>See Current Parking Spot</button>
            <button>Save a New Parking Spot</button>
        </React.Fragment>
    )
}