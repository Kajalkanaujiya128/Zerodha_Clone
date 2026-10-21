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
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img
                        src={imageURL}
                        alt={`${productName} product`}
                    />
                </div>

                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                        <a
                            href={"http://localhost:3001"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Try Demo
                        </a>

                        <Link to="/about" style={{ marginLeft: "50px" }}>
                            Learn more
                        </Link>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img
                                src="media/images/googlePlayBadge.svg"
                                alt="Get it on Google Play"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="media/images/appStoreBadge.svg"
                                alt="Download on the App Store"
                                style={{ marginLeft: "50px" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;