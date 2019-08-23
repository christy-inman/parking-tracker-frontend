import React from 'react'

export default function New(props) {
    const handleSubmitNewSpot = (event) => {
        event.preventDefault()
        // console.log(form[0].value)
        const form = event.target
        const newSpot = {
            cross_streets: form[0].value,
            day: form[1].value,
            notes: form[2].value
        }
        props.addNewSpot(newSpot)
        form.reset()
    }
    return (
        <React.Fragment>
            <h1>New Spot</h1>
            <form className='new-spot-form' onSubmit={handleSubmitNewSpot} >
                <label htmlFor='cross-streets-input' className='label'>Cross Streets</label>
                <input required 
                    type='text' 
                    name='cross-streets-input' 
                    className='input' 
                    placeholder='What is the closest intersection' 
                />
                <label htmlFor='date-input' className='label'>Date</label>
                <input required type='date' name='date-input' className='input' />
                <label htmlFor='note-input' className='label'>Notes</label>
                <input required 
                    type='textfield' 
                    name='note-input' 
                    className='input' 
                    placeholder='Add any addtional notes to remind you where you left your transportation'
                />
                <input type='submit' value='Save New Parking Spot' className='button' />
            </form>
        </React.Fragment>
    )
}