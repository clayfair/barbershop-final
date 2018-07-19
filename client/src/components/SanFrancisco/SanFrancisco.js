import React from "react";
import "./SanFrancisco.css";
import axios from "axios";
import { Link } from 'react-router-dom';

const SanFrancisco = props => (
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
            <img id="Jumbo" src={process.env.PUBLIC_URL + '/Jumbo.png'} alt="Jumbo" />
        </div>

        <h3 id="Barbershop">San Francisco Barbershop</h3>
        <p id="Location">450 Post Street, San Francisco, CA 94102</p>
        <img id="Rating" src={process.env.PUBLIC_URL + '/Rating.png'} alt="Rating" />
        <p id="Rating-Index">3.0 <span id="number">(232)</span></p>
        <img id="Menu" src={process.env.PUBLIC_URL + '/Menu.png'} alt="Menu" />
        <h3 id="Barbers-Title">Barbers</h3>


        <a data-toggle="modal" data-target="#exampleModal">
            <img id="Cell1" src={process.env.PUBLIC_URL + '/Cell1.png'} alt="Cell1" />
        </a>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        ...
      </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <img id="Cell2" src={process.env.PUBLIC_URL + '/Cell2.png'} alt="Cell2" />
        <img id="Cell3" src={process.env.PUBLIC_URL + '/Cell3.png'} alt="Cell3" />
    </div>
);

export default SanFrancisco;