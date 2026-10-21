import React from "react";

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-3 fs-4">
                    Free equity investment and flat ₹20 intraday and F&O trades
                </h3>
            </div>

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-4">
                    <img
                        src="media/images/pricingEquity.svg"
                        alt="Free equity delivery pricing"
                    />
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted">
                        All equity delivery investments (NSE, BSE) are
                        absolutely free — ₹0 brokerage.
                    </p>
                </div>

                <div className="col-4 p-4">
                    <img
                        src="media/images/intradayTrades.svg"
                        alt="Intraday and F&O trading charges"
                    />
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted">
                        Flat ₹20 or 0.03% (whichever is lower) per executed
                        order for online intraday trades across equity,
                        currency, and commodity segments.
                    </p>
                </div>

                <div className="col-4 p-4">
                    <img
                        src="media/images/pricingEquity.svg"
                        alt="Free direct mutual fund pricing"
                    />
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted">
                        All direct mutual fund investments are absolutely
                        free — ₹0 commissions and DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;