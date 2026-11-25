import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="main-footer">
            <div className="container footer-container">

                <div className="row footer-main-row">

                    <div className="col-12 col-sm-6 col-lg-3 footer-column">
                        <img
                            src="media/images/logo.svg"
                            alt="Zerodha logo"
                            className="footer-logo"
                        />

                        <p className="footer-copyright">
                            &copy; 2010 - 2024, Not Zerodha Booking Ltd. All rights reserved.
                        </p>

                        <div className="footer-social">
                            <Link to="#" aria-label="X"><i className="fa-brands fa-x-twitter"></i></Link>
                            <Link to="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></Link>
                            <Link to="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="#" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></Link>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 footer-column">
                        <h5>Company</h5>
                        <Link to="#">About</Link>
                        <Link to="#">Products</Link>
                        <Link to="#">Pricing</Link>
                        <Link to="#">Referral programme</Link>
                        <Link to="#">Careers</Link>
                        <Link to="#">Zerodha.tech</Link>
                        <Link to="#">Press & media</Link>
                        <Link to="#">Zerodha cares (CSR)</Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 footer-column">
                        <h5>Support</h5>
                        <Link to="#">Contact</Link>
                        <Link to="/support">Support portal</Link>
                        <Link to="#">Z-Connect blog</Link>
                        <Link to="#">List of charges</Link>
                        <Link to="#">Downloads & resources</Link>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 footer-column">
                        <h5>Account</h5>
                        <Link to="/signup">Open an account</Link>
                        <Link to="#">Fund transfer</Link>
                        <Link to="#">60 day challenge</Link>
                    </div>

                </div>

                <div className="footer-legal">

                    <p>
                        Zerodha Booking Ltd.: Member of NSE & BSE - SEBI Registration no.:INZ000031633
                        CDSL:Depository services through Zerodha Securities Pvt.Ltd. - SEBI Registration no. :
                        IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd MCX: 46025 - SEBI
                        Registration no. INZ000031638 Registered Address: Zerodha Broking Ltd., #153/154, 4th
                        Cross Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase ,Bengulure-
                        560078,Karnataka ,India. For any complaints pertaining to dp@zerodha.com. Please ensure you
                        carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
                        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
                        Mobile Number,E-mail ID. Benefits: Effective Communication, Speedy
                        redressel of the grievances
                    </p>

                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        (Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f
                        (September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from
                        depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement
                        issued by NSDL/CDSL every month.
                    </p>

                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants.
                        Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of
                        investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP,
                        Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are
                        subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize
                        your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't
                        give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such
                        services, please create a ticket here.
                    </p>

                    <p>
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
                        (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
                        mechanism for such products.
                    </p>

                    <p>
                        Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through
                        Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these
                        products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance
                        Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
                    </p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
