import React from "react";

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>

                <div className='col-12 col-md-6 text-center'>
                    <img
                        src="media/images/education.svg"
                        alt="Free market education"
                        className="img-fluid"
                        style={{ width: "70%" }}
                    />
                </div>

                <div className='col-12 col-md-6 mt-4 mt-md-0'>
                    <h1 className='mb-3 fs-2'>
                        Free and open market education
                    </h1>

                    <p>
                        Varsity, the largest online stock market education book in the world
                        covering everything from the basics to advanced trading.
                    </p>

                    <a
                        href="https://zerodha.com/varsity/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2 mx-md-5"
                        style={{ textDecoration: "none" }}
                    >
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className="mt-4 mt-md-5">
                        TradingQ&A, the most active trading and investment community in India
                        for all your market related queries.
                    </p>

                    <a
                        href="https://tradingqna.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none" }}
                    >
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;
