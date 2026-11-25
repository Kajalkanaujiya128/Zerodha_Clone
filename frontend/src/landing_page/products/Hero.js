import React from "react";

function Hero() {
    return (
        <div className="container border-bottom mb-5">
            <div className="text-center mt-4 mt-md-5 p-3 p-md-4">

                <h1>Technology</h1>

                <h3 className="text-muted mt-3 fs-4">
                    Sleek, modern and intuitive trading platforms
                </h3>

                <p className="mt-3 mb-4 mb-md-5 px-2">
                    Check out our{" "}
                    <a
                        href="/"
                        style={{ textDecoration: "none" }}
                    >
                        investment offerings
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Hero;
