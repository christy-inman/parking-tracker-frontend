import React, {Component} from 'react'

export default class NewForm extends Component {
    state = {
        cross_streets: '',
        day: '',
        notes: ''
    }
    handleSubmitNewSpot = (event) => {
        event.preventDefault()
        // console.log(form[0].value)
        const form = event.target
        const newSpot = {
            cross_streets: form[0].value,
            day: form[1].value,
            notes: form[2].value
        }
        console.log(newSpot)
        this.props.addNewSpot(newSpot)
    }
    render(){
        return (
            <form className='new-spot-form' onSubmit={this.handleSubmitNewSpot} >
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
        )
    }
}