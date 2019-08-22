import React from 'react'

export default function Login() {
    return (
        <form className="login-form">
            <h1>Login:</h1>
            <label for="username-input" className="label">Username: </label>
            <input type="text" className="username-input" placeholder="username" />
            <label for="password-input" className="label">Password: </label>
            <input type="text" className="password-input" placeholder="password" />
            <input type="submit" className="submit" value="Login" />
        </form>
    )
}