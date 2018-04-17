import React from "react";

const Header = (props) =>{
    return(
    <nav className="navbar navbar-light bg-light fixed-top">
        <span className="navbar-brand mb-0 h1">Score {props.score}</span>
        <span className={props.guess === "Wrong!" ? " navbar-brand center mb-0 h1 text-danger":
        props.guess === "Well done!" ? "navbar-brand center mb-0 h1 text-success" :
        "navbar-brand center mb-0 h1"}>{props.guess}</span>
        <span className="navbar-brand center mb-0 h1"> Highscore {props.highScore}</span>
    </nav>
)
} 
export default Header;
