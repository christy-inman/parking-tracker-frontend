import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './Login'
import New from './New'
import Main from './MainContainer'
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
        fetch(spotURL)
            .then(response => response.json())
            .then(response => this.setState({
                spots: response
            }))
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
                <Route exact path='/new/' component={New} />
                {/* <Route path='/current/' render={props => {
                    return <Main spots={this.state.spots} /> */}
                }} />
                <Route path='/past/' render={props => {
                        return <Past spots={this.state.spots} />
                    }} />
                <Route path='/favorites/' component={Favorites} />
                <Route path='/login/' component={Login} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )}
}