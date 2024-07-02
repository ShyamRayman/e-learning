import React from "react";
import { reviewCards } from "./cardname";

export function CardCss(props){
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <img src={props.image} alt="" />
        </div>
    )
}