import React from 'react'

export default function UpdateForm(props) {
    const handleSubmitUpdateSpot = (event) => {
        event.preventDefault()
        const id = props.spot.id
        // console.log(form[0].value)
        const form = event.target
        const updatedSpot = {
            cross_streets: form[0].value,
            day: form[1].value,
            notes: form[2].value
        }
        console.log(updatedSpot)
        props.updateSpot(id, updatedSpot)
        window.location.reload()
    }
    return (
        <React.Fragment>
            <h1>Update Spot</h1>
            <form className='update-spot-form' onSubmit={handleSubmitUpdateSpot} >
                <label htmlFor='cross-streets-input' className='label'>Cross Streets</label>
                <input required 
                    type='text' 
                    name='cross-streets-input' 
                    className='input' 
                    defaultValue={props.spot.cross_streets}
                    placeholder='What is the closest intersection' 
                />
                <label htmlFor='date-input' className='label'>Date</label>
                <input required 
                    type='date' 
                    name='date-input' 
                    className='input'
                />
                <label htmlFor='note-input' className='label'>Notes</label>
                <input required 
                    type='textfield' 
                    name='note-input' 
                    className='input' 
                    defaultValue={props.spot.notes}
                    placeholder='Add any addtional notes to remind you where you left your transportation'
                />
                <input type='submit' value='Update Parking Spot' />
            </form>
        </React.Fragment>
    )
}