import React from 'react';
import globe from '../images/globe.jpg'
import Login from './Login';

export default function Home() {
    return (
        <div className = "container">
            <div className = "homediv">
                <img className = "App-logo" src = {globe} style = {{width:"200px", height:"200px", marginTop:"20px"}} alt = "Noimage" />
                <h2 style ={{fontFamily: "cursive", marginTop:"40px"}}>Connects with friends <br /> and world around you</h2>
            </div>
            <div>
                <Login />
            </div>
        </div>
    )
}
