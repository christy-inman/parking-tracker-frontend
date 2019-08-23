import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Login'
import New from './New'
import Current from './Current'
import Past from './PastSpots'
import Favorites from './Favorites'
import NotFound from './NotFound'
import Home from './Home'

const spotURL = 'https://parking-tracker-backend.herokuapp.com/'

export default class NavBar extends Component {
    state = {
        spots: [],
        favorites: []
    } 

    componentDidMount() {
        fetch('http://localhost:3000/')
            .then(response => response.json())
            .then(response => this.setState({
                spots: response
            }))
    }

    addNewSpot = (newSpot) => {
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newSpot)
        }).then(response => response.json())
    }

    deleteSpot = (spot) => {
        fetch('http://localhost:3000/', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(spot)
        }).then(response => response.json())
            .then(response => console.log(response))
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

    render() {
        return (
        <Router>
            <nav className='nav-bar'>
                <Link className='link' to='/new/'>New Spot</Link>
                <Link className='link' to='/current/'>Current Spot</Link>
                <Link className='link' to='/favorites/'>Favorite Spots</Link>
                <Link className='link' to='/past/'>Past Spots</Link>
                <Link className='link' to='/login/'>Login</Link>
                <Link className='link' to='/'>Home Logo</Link>
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
                                deleteSpot={this.deleteSpot}
                            />
                }} />
                <Route path='/past/' render={props => {
                    return <Past 
                                spots={this.state.spots} 
                                addFavorite={this.addFavorite}
                                deleteSpot={this.deleteSpot}
                            />
                }} />
                <Route path='/favorites/' render={props => {
                    return <Favorites 
                                favorites={this.state.favorites} 
                            />
                }} />
                <Route path='/login/' component={Login} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )}
}