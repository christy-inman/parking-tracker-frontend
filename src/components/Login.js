import React from 'react'

export default function Login() {
    return (
        <React.Fragment>
            <h1>Login:</h1>
            <form className="login-form">
                <label for="username-input" className="label">Username: </label>
                <input type="text" className="username-input" placeholder="username" />
                <label for="password-input" className="label">Password: </label>
                <input type="text" className="password-input" placeholder="password" />
                <input type="submit" className="submit" value="Login" />
            </form>
        </React.Fragment>
    )
}