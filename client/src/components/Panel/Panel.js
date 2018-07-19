import React from "react";
import "./Panel.css";
import axios from "axios";
import { Link } from 'react-router-dom';

let images = ["/Home1.png", "/Home2.png", "/Home3.png", "/Home4.png", "/Home5.png", "/Home6.png"];

const Panel = props => (
    <div>
        <div id="square">

            <img id="Home" src={process.env.PUBLIC_URL + (images[Math.floor(Math.random() * images.length)])} alt="Home" />
            {console.log(images[Math.floor(Math.random() * images.length)])}

        </div>
        <Link to={`/shops/${props.shop._id}`}>
            <div id="description">
                <h3 id="title">{props.shop.title}</h3>
                <p id="subtitle">{props.shop.subtitle}</p>
                <p id="location"><span id="rating">{props.shop.rating} </span> (232)</p>
                <img id="star" src={process.env.PUBLIC_URL + '/Rating.png'} alt="star" />
                <img id="panel-line" src={process.env.PUBLIC_URL + '/line.png'} alt="line" />
            </div>
        </Link>
    </div>
);

export default Panel;


// {
//     images ?
//         images.forEach((image) => (
//             console.log("hello")
//         )) :
//         <div>Loading...</div>

// }