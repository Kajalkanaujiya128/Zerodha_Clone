import React from "react";
import { Link } from "react-router-dom";
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="supportWrapper" id="supportWrapper">
                <h4>Support Portal</h4>
                <Link to="">Track Tickets</Link>
            </div>
            <div className="row" id="supportContent">
                <div className="col-6">
                    <h1 style={{  fontSize: "23px", lineHeight: "1.5",fontWeight: "500" }}>
                        Search for an answer or browse help topics
                        <br />
                        to create a ticket
                    </h1>
                    <input
                        className="form-control"
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                    />
                    <div className="supportLinks">
                        <Link to="">Track account opening</Link>
                        <Link to="">Track segment activation</Link>
                        <Link to="">Intraday margins</Link>
                        <Link to="">Kite user manual</Link>
                    </div>
                </div>
                <div className="col-6 ps-5">
                    <h1 className="fs-4">Featured</h1>
                <ol>
                    <li>
                        <Link to="">Current Takeovers and Delisting - January 2024</Link>
                    </li>
                    <li>
                        <Link to="">Latest Intraday leverages - MIS & CO</Link>
                    </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
export default Hero;