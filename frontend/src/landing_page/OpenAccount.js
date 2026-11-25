
import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div className="container p-3 p-md-5 mb-5">
            <div className="row text-center">

                <h1
                    className="mt-3 mt-md-5 text-muted"
                    style={{ fontSize: "33px" }}
                >
                    Open a Zerodha account
                </h1>

                <p className='mt-4 text-muted fs-5 px-2'>
                    Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                    F&O trades.
                </p>

                <div className="col-12 col-md-3 mx-auto mt-2 mb-4 mb-md-5">
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

export default OpenAccount;
