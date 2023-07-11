import React from "react";
import ReactDOM  from "react-dom/client";
import "./styles.css"
import logo from "./Logo.png"


export default function Head()
{
    return(
        <header className="head">
        <div className="headcon">
            <img src={logo} className="logo"/>
            <p className="htxt">React Project </p>
        </div>
        </header>
    )
    
}