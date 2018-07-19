import React, { Component } from "react";
import "./AllShops.css";
import Panel from '../Panel';
import axios from "axios";
import Filter from "../Filter";
import Navbar from "../Navbar";

class AllShops extends Component {

    state = {
        shops: null
    }

    componentDidMount() {
        axios
            .get(`/shops`)
            .then(res => {
                this.setState({
                    shops: res.data
                })
            })
    }

    render() {
        const { shops } = this.state;
        return (
            <div>
                <div>
                    <Navbar />
                    <Filter />
                </div>
                <div>
                    {
                        shops ?
                            shops.map((shop) => (
                                <Panel
                                    shop={shop}
                                />
                            )) :
                            <div>Loading...</div>
                    }
                </div>
            </div >
        )
    }
}

export default AllShops;