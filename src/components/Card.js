import React from 'react'

export default function Card(props) {
    return (
        <React.Fragment>
            <h2>{props.spot.cross_streets}</h2>
            <p>{props.spot.day}</p>
            <p>{props.spot.notes}</p>
        </React.Fragment>
    )
}