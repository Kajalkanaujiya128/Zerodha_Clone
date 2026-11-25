import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    LearnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-4 mt-md-5">
            <div className="row align-items-center">

                <div className="col-12 col-md-6 text-center p-3">
                    <img
                        src={imageURL}
                        alt={`${productName} product`}
                        className="img-fluid"
                    />
                </div>

                <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
                    <h1>{productName}</h1>

                    <p>{productDescription}</p>

                    <div className="d-flex flex-wrap gap-3">
                        <a
                            href={tryDemo || "http://localhost:3001"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Try Demo
                        </a>

                        <Link to="/about">
                            Learn more
                        </Link>
                    </div>

                    <div className="mt-3 d-flex flex-wrap align-items-center gap-3">
                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Get it on Google Play"
                                className="img-fluid"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/images/appStoreBadge.svg"
                                alt="Download on the App Store"
                                className="img-fluid"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftSection;
