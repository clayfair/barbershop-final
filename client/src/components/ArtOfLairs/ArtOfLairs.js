import React from "react";
import "./ArtOfLairs.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const ArtOfLairs = props => (
    <div>
        <div>
            <img id="iPhone-Nav" src={process.env.PUBLIC_URL + '/iPhone-X.png'} alt="iPhone" />
            <a href="/">
                <img id="up-arrow" src={process.env.PUBLIC_URL + '/up-arrow.png'} alt="up-arrow" />
            </a>
            <img id="Today" src={process.env.PUBLIC_URL + '/Today.png'} alt="Today" />
            <img id="Share" src={process.env.PUBLIC_URL + '/Share.png'} alt="Share" />
        </div>
        <div id="hero">
        <img id="Jumbo3" src={process.env.PUBLIC_URL + '/Jumbo3.png'} alt="Jumbo3" />
        </div>

        <h3 id="Barbershop">Art of Lairs Barbershop</h3>
        <p id="Location">7700 Orangethorpe Ave Ste 7A</p>
        <img id="Rating" src={process.env.PUBLIC_URL + '/Rating.png'} alt="Rating" />
        <p id="Rating-Index">3.0 <span id="number">(232)</span></p>
        <img id="Menu" src={process.env.PUBLIC_URL + '/Menu.png'} alt="Menu" />
        <h3 id="Barbers-Title">Barbers</h3>
        <img id="Cell1" src={process.env.PUBLIC_URL + '/Cell1.png'} alt="Cell1" />
        <img id="Cell2" src={process.env.PUBLIC_URL + '/Cell2.png'} alt="Cell2" />
        <img id="Cell3" src={process.env.PUBLIC_URL + '/Cell3.png'} alt="Cell3" />
    </div>
);

export default ArtOfLairs;