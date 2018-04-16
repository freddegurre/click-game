import React from "react";
import "./ClickCard.css";

const ClickCard = (props) => {
    return (
        <div className="card" onClick={()=>props.clickEvent(props.id)}>
            <div className="imgContainer">
                <img alt={props.name} src={props.image} />
                
            </div>

        </div>
    );
}


export default ClickCard;
