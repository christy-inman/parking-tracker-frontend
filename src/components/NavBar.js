import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Login'
import New from './New'
import Current from './Current'
import Past from './PastSpots'
import Favorites from './Favorites'
import NotFound from './NotFound'
import Home from './Home'
import Update from './UpdateForm'

const spotURL = 'https://parking-tracker-backend.herokuapp.com/'

export default class NavBar extends Component {
    state = {
        spots: [],
        favorites: [],
        spot: []
    }

    getSpots = () => {
        fetch(spotURL)
            .then(response => response.json())
            .then(response => this.setState({
                spots: response
            }))
            .catch(error => console.log(error))
    }

    componentDidMount() {
       this.getSpots()
    }

    addNewSpot = (newSpot) => {
        fetch(spotURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newSpot)
        })
            .then(response => {
                console.log(response.json())
            })
            .then(this.getSpots)
            .catch(error => console.log(error))
    }

    updateSpot = (id, updatedSpot) => {
        fetch(spotURL + `${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedSpot)
        })
            .then(response => response.json())
            .then(this.getSpots)
            .catch(error => console.log(error))
    }

    deleteSpot = (id) => {
        fetch(spotURL + `${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
            .then(response => response.json())
            .then(this.getSpots)
            .catch(error => console.log(error))
    }

    addFavorite = spot => {
        // {this.favorites.includes(spot)
        //     ? this.favorites
        //     : 
            this.setState({
                favorites: [...this.state.favorites, spot]
            })
        // }
    }

    populateUpdateForm = spot => {
        this.setState({spot})
    }

    render() {
        return (
        <Router>
            <nav className='nav-bar'>
                <Link className='link' to='/new/'>New Spot</Link>
                <Link className='link' to='/current/'>Current Spot</Link>
                <Link className='link' to='/favorites/'>Favorite Spots</Link>
                <Link className='link' to='/past/'>Past Spots</Link>
                <Link className='link' to='/login/'>Login</Link>
                <Link className='link' to='/'>Little House</Link>
            </nav>
            <Switch>
                <Route exact path='/new/' render={props => {
                    return <New 
                                addNewSpot={this.addNewSpot} 
                            />
                }} />
                <Route path='/current/' render={props => {
                    return <Current 
                                spots={this.state.spots} 
                                addFavorite={this.addFavorite}
                                populateUpdateForm={this.populateUpdateForm}
                                updateSpot={this.updateSpot}
                                deleteSpot={this.deleteSpot}
                            />
                }} />
                <Route path='/past/' render={props => {
                    return <Past 
                                spots={this.state.spots} 
                                addFavorite={this.addFavorite}
                                populateUpdateForm={this.populateUpdateForm}
                                updateSpot={this.updateSpot}
                                deleteSpot={this.deleteSpot}
                            />
                }} />
                <Route path='/favorites/' render={props => {
                    return <Favorites 
                                favorites={this.state.favorites} 
                            />
                }} />
                <Route path='/update/' render= {props => {
                    return <Update 
                                updateSpot={this.updateSpot}
                                spot={this.state.spot}
                            />
                }} />
                <Route path='/login/' component={Login} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )}
}