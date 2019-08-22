import React from 'react'

export default function New() {
    return (
        <React.Fragment>
            <h1>New Spot</h1>
            <form className='new-spot-form'>
                <label for='cross-streets-input' className='label'>Cross Streets:</label>
                <input required 
                    type='text' 
                    name='cross-streets-input' 
                    className='input' 
                    placeholder='What is the closest intersection' 
                />
                <label for='date-input' className='label'>Date:</label>
                <input required type='date' name='date-input' className='input' />
                <label for='note-input' className='label'>Notes:</label>
                <input required 
                    type='textfield' 
                    name='note-input' 
                    className='input' 
                    placeholder='Add any addtional notes to remind you where you left your transportation'
                />
                <input type='submit' value='Save New Parking Spot' />
            </form>
        </React.Fragment>
    )
}