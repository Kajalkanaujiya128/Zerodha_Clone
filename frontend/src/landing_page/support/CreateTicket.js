


import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2">
                    To create a ticket, select a relevant topic
                </h1>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>{" "}
                        Account Opening
                    </h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online Account Opening</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offering Account Opening</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF Account Opening</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>NRI Account Opening</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges at Zerodha</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting Started</Link><br />
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4><i className="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login Credentials</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Modifications and Segment Addition</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>DP ID and bank details</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer and conversion of shares</Link><br />
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4><i className="fa-solid fa-chart-column"></i> Trading and Platforms</h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margin/leverage, Product and Order types</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite Web and Mobile</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate Account</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Sentinel</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite API</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Pi and other platforms</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Stockreports+</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>GTT</Link><br />
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4><i className="fa-solid fa-chart-pie"></i> Funds</h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Funds</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund Withdrawal</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding Bank Accounts</Link><br />
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4><i className="fa-regular fa-circle"></i> Console</h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Ledger</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>60 Day Challenge</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Referral Program</Link><br />
                </div>

                <div className="col-4 p-5 mt-2 mb-2">
                    <h4><i className="fa-solid fa-circle-dollar-to-slot"></i> Coin</h4>
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding Mutual Funds</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>About Coin</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Buying and Selling through Coin</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Starting an SIP</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Managing your Portfolio</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin App</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Moving to Coin</Link><br />
                    <Link to="/support" style={{ textDecoration: "none", lineHeight: "2.5" }}>Government Securities</Link><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
