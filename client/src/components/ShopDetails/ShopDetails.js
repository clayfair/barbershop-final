import React from "react";
import "./ShopDetails.css";
import { Link } from 'react-router-dom';
import API from '../../utils/API.js';




const ShopDetails = props => {
    const id = props.match.params.id
    const shop = API.getShop(id)
    return (
    <div>
        Hey what's up are you working 
        <div id="description">
            <h3 id="title">{shop.title}</h3>
            <p id="subtitle">{shop.subtitle}</p>
            <p id="location"><span id="rating">{shop.rating} </span> (232)</p>
        </div>
    </div>
)
};


// const Player = (props) => {
//     const id = props.match.params.id
//     const player = PlayerAPI.get(
//         parseInt(props.match.params.number, 10)
//     )
//     if (!player) {
//         return <div>Sorry, but the player was not found</div>
//     }
//     return (
//         <div>
//             <h1>{player.name} (#{player.number})</h1>
//             <h2>{player.position}</h2>
//         </div>
//     )

export default ShopDetails;
