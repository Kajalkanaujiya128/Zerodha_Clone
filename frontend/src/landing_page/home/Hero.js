import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container p-3 p-md-5 mb-5">
            <div className="row text-center">

                <img
                    src="media/images/homeHero.png"
                    alt="Zerodha investment platform"
                    className="img-fluid mb-4 mb-md-5"
                />

                <h1 className="mt-3 mt-md-5">
                    Invest in everything
                </h1>

                <p className="px-2">
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>

                <div className="col-12 col-md-3 mx-auto mb-4">
                    <Link
                        to="/signup"
                        className="p-2 btn btn-primary fs-5 w-100"
                    >
                        Signup Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Hero;
