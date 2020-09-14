import React from 'react';
import './Login.css'

export default function Login() {
    return (
        <div className = "logindiv">
            <form className = "loginform">
                <input
                className = "logininput"
                type = "text"
                placeholder = "EmailAddress or PhoneNumber"
                />
                <br />
                <input 
                className = "loginpasswordinput"
                type = "password"
                placeholder="Password"
                />
                <br />
                <button className = "loginbutton" type = "primary">
                Login
                </button>
            </form>
        </div>
    )
}
