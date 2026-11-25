import React from "react";
import { Link } from "react-router-dom";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">

                <h1>The Zerodha Universe</h1>

                <p className="px-2">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/smallcaseLogo.png"
                        style={{ width: "50%", height: "50px", objectFit: "contain" }}
                        alt="smallcase"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Thematic investments platform that helps you invest in diversified
                        baskets of stocks or ETFs.
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/streakLogo.png"
                        style={{ width: "40%", height: "50px", objectFit: "contain" }}
                        alt="streak"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Systematic trading platform that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/sensibullLogo.svg"
                        style={{ width: "50%", height: "50px", objectFit: "contain" }}
                        alt="sensibull"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Options trading platform that lets you create strategies, analyze
                        positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        style={{ width: "50%", height: "50px", objectFit: "contain" }}
                        alt="zerodha fund"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Our asset management venture that is creating simple and transparent
                        index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/goldenPiLogo.png"
                        style={{ width: "50%", height: "50px", objectFit: "contain" }}
                        alt="golden pi"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Investment research platform that offers detailed insights on
                        stocks, sectors, supply chains, and more.
                    </p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 p-3 mt-4 mt-md-5">
                    <img
                        src="media/images/dittoLogo.png"
                        style={{ width: "35%", height: "50px", objectFit: "contain" }}
                        alt="ditto"
                    />
                    <p className="text-muted mt-3" style={{ fontSize: "0.9em", lineHeight: "1.6" }}>
                        Personalized advice on life and health insurance. No spam and no
                        mis-selling.
                    </p>
                </div>

                <div className="col-12 mb-4 mb-md-5">
                    <Link
                        to="/signup"
                        className="p-2 btn btn-primary fs-5 d-inline-block"
                        style={{ width: "100%", maxWidth: "220px" }}
                    >
                        Signup Now
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Universe;
