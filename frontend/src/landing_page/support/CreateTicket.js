import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
    const supportTopics = [
        {
            icon: "fa fa-plus-circle",
            title: "Account Opening",
            links: [
                "Online Account Opening",
                "Offering Account Opening",
                "Company, Partnership and HUF Account Opening",
                "NRI Account Opening",
                "Charges at Zerodha",
                "Zerodha IDFC FIRST Bank 3-in-1 Account",
                "Getting Started"
            ]
        },
        {
            icon: "fa-solid fa-user",
            title: "Your Zerodha Account",
            links: [
                "Login Credentials",
                "Account Modifications and Segment Addition",
                "DP ID and bank details",
                "Your Profile",
                "Transfer and conversion of shares"
            ]
        },
        {
            icon: "fa-solid fa-chart-column",
            title: "Trading and Platforms",
            links: [
                "Margin/leverage, Product and Order types",
                "Kite Web and Mobile",
                "Trading FAQs",
                "Corporate Account",
                "Sentinel",
                "Kite API",
                "Pi and other platforms",
                "Stockreports+",
                "GTT"
            ]
        },
        {
            icon: "fa-solid fa-chart-pie",
            title: "Funds",
            links: [
                "Adding Funds",
                "Fund Withdrawal",
                "eMandates",
                "Adding Bank Accounts"
            ]
        },
        {
            icon: "fa-regular fa-circle",
            title: "Console",
            links: [
                "Reports",
                "Ledger",
                "Portfolio",
                "60 Day Challenge",
                "IPO",
                "Referral Program"
            ]
        },
        {
            icon: "fa-solid fa-circle-dollar-to-slot",
            title: "Coin",
            links: [
                "Understanding Mutual Funds",
                "About Coin",
                "Buying and Selling through Coin",
                "Starting an SIP",
                "Managing your Portfolio",
                "Coin App",
                "Moving to Coin",
                "Government Securities"
            ]
        }
    ];

    return (
        <div className="container create-ticket-page">
            <div className="row py-4 py-md-5 mt-3 mt-md-5 mb-4 mb-md-5">

                <div className="col-12 mb-3">
                    <h1 className="fs-2 create-ticket-heading">
                        To create a ticket, select a relevant topic
                    </h1>
                </div>

                {supportTopics.map((topic, index) => (
                    <div
                        className="col-12 col-md-6 col-lg-4 p-3 p-md-4"
                        key={index}
                    >
                        <div className="support-topic-card">
                            <h4>
                                <i className={topic.icon} aria-hidden="true"></i>
                                {" "}{topic.title}
                            </h4>

                            <div className="support-topic-links">
                                {topic.links.map((link, linkIndex) => (
                                    <Link
                                        to="/support"
                                        key={linkIndex}
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default CreateTicket;
