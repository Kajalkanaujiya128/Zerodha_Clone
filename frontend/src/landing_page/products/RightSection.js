import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    LearnMore,
}) {
    return (
        <div className='container mt-4 mt-md-5'>
            <div className='row align-items-center'>

                <div className='col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5'>
                    <h1>{productName}</h1>

                    <p>{productDescription}</p>

                    <div>
                        <a
                            href={LearnMore || "/about"}
                            style={{ textDecoration: "none" }}
                        >
                            Learn more
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className='col-12 col-md-6 p-3 text-center'>
                    <img
                        src={imageURL}
                        alt={`${productName} product`}
                        className="img-fluid"
                    />
                </div>

            </div>
        </div>
    );
}

export default RightSection;
