import React from 'react'
import './Register.css'
export default function Register() {
    return (
        <div className = "regcontainer">
            <h2 className="head1">Sign Up</h2>
            <h6 className = "head2">Its quick and easy</h6>
            <form className = "registerform">
                <input 
                className = "frstnameinput"
                type="text"
                placeholder = "First Name"
                required
                />
                <br />
                <input 
                className = "lastnameinput"
                type="text"
                placeholder = "Last Name"
                required
                />
                <br />
                <input 
                className = "emailinput"
                type="email"
                placeholder = "Mobilenumber or Email"
                required
                />
                <br />
                <input 
                className = "regpasswordinput"
                type="password"
                placeholder = "New Password"
                required
                />
                <br />
                <button
                className = "regbutton"
                type = "submit"
                >
                Register
                </button>
            </form>
        </div>
    )
}
