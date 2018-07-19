import React from "react";
import "./Filter.css";

const Filter = () => (
    <div id="filter">
        <b id="near-me"> Near Me </b><img id="arrow" src={process.env.PUBLIC_URL + '/arrow.png'} alt="arrow" />
    </div>
);

export default Filter;