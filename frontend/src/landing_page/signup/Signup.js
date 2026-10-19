import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import {
  CircleUserRound,
  UsersRound,
  Baby,
  Building2,
  Globe
} from "lucide-react";


function Signup() {
  const [showDropdown, setShowDropdown] = useState(false);
  const phoneInputRef = useRef(null);
  const [phone, setPhone] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

      useEffect(() => {
    phoneInputRef.current?.focus();
  }, []);

const handlePhoneFocus = () => {
  if (phone === "") {
    setPhone("9876543210");
  }
};


const navigate = useNavigate();

const handleGetOtp = () => {
  const mobile = phone.replace(/\D/g, "");

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  navigate("/mobile-otp", {
    state: {
      phone: mobile,
      demoOtp: "123456"
    }
  });
};
  return (
    <>
      <div className="container border-bottom mb-5">

        {/* Main Heading */}
        <div className="text-center text-muted mt-5 p-3">
          <h2>Open a free demat and trading account online</h2>

          <p
            className="mt-3 mb-5 text-muted"
            style={{ fontSize: "20px" }}
          >
            Start investing brokerage free and join a community
            of 1.8+ crore investors and traders
          </p>
        </div>

        {/* Signup Section */}
        <div className="row align-items-center justify-content-center signup-row">

          {/* Left Image */}
          <div className="col-6 text-center">
            <img
              src="media/images/Signup.png"
              alt="Signup"
              style={{ width: "95%" }}
            />
          </div>

          {/* Right Signup Form */}
          <div className="col-6">
            <h1 style={{ fontSize: "30px" }}>
              Signup Now
            </h1>

            <p className="text-muted" style={{ fontSize: "16px" }}>
              Or track your existing application
            </p>

            {/* Phone Input */}
            <div className="phone-box">
              <button
                type="button"
                className="country-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="https://flagcdn.com/w40/in.png"
                  alt="India"
                />

                <span className="country-code">+91</span>
              </button>

              {/* <input
               ref={phoneInputRef}
                type="tel"
                value={phone}
                  onFocus={handlePhoneFocus}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter mobile number"
              /> */}
<input
  type="tel"
  value={phone}
  onFocus={handlePhoneFocus}
  onChange={(e) =>
    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
  }
  onClick={(e) => e.target.select()}
  maxLength={10}
  ref={phoneInputRef}
/>
              {/* NRI Dropdown */}
              {showDropdown && (
                <div className="country-dropdown">
                  <div className="nri-option">
                    NRI account?{" "}
                    <a href="#nri">Click here</a>
                  </div>
                </div>
              )}
            </div>

            {/* Get OTP */}

  <button
  type="button"
  className="btn btn-primary mt-3"
  onClick={handleGetOtp}
>
  Get OTP
</button>




            <br />
            <br />

            {/* Terms */}
            <p className="text-muted" style={{ fontSize: "13px" }}>
              By proceeding, you agree to the Zerodha{" "}
              <a href="#terms">terms</a> &{" "}
              <a href="#privacy">privacy policy</a>
            </p>

            {/* NRI */}
            <p className="text-muted" style={{ fontSize: "13px" }}>
              Looking to open NRI account?{" "}
              <a href="#nri">Click here</a>
            </p>
          </div>
        </div>

        {/* Existing Demat Account */}
        <div className="text-center mt-5 p-3">
          <h2>Already have a demat account? <a href="/login" style={{fontSize:"20px"}}>Login</a></h2>

          <p
            className="mt-3 mb-5 text-muted"
            style={{ fontSize: "18px" }}
          >
            Move your holdings to Zerodha and we'll cover your
            transfer costs, up to ₹500,{" "}
            <a href="#learn">learn more</a>.
          </p>
        </div>

        {/* Investment Options */}
        <div className="investment-section">
          <h4 className="text-center mb-5">
            Investment options with Zerodha demat account
          </h4>

          <div className="investment-grid">

            {/* Left Column */}
            <div className="investment-column">

              {/* Stocks */}
              <div className="investment-card">
                <div className="investment-image">
                  <img
                    src="media/images/stocks-acop.svg"
                    alt="Stocks"
                  />
                </div>

                <div className="investment-content">
                  <h5>Stocks</h5>
                  <p>
                    Invest in all exchange-listed securities
                  </p>
                </div>
              </div>

              {/* Mutual Funds */}
              <div className="investment-card">
                <div className="investment-image">
                  <img
                    src="media/images/mf-acop.svg"
                    alt="Mutual Funds"
                  />
                </div>

                <div className="investment-content">
                  <h5>Mutual Funds</h5>
                  <p>
                    Invest in commission-free direct
                    mutual funds
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="investment-column">

              {/* IPO */}
              <div className="investment-card">
                <div className="investment-image">
                  <img
                    src="media/images/ipo-acop.svg"
                    alt="IPO"
                  />
                </div>

                <div className="investment-content">
                  <h5>IPO</h5>
                  <p>
                    Apply to the latest IPOs instantly via UPI
                  </p>
                </div>
              </div>

              {/* Future & Options */}
              <div className="investment-card">
                <div className="investment-image">
                  <img
                    src="media/images/fo-acop.svg"
                    alt="Future and Options"
                  />
                </div>

                <div className="investment-content">
                  <h5>Future &amp; Options</h5>
                  <p>
                    Hedge and mitigate market risk through
                    simplified F&amp;O trading
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Explore Investment Button */}
        <div className="text-center mt-5 p-3">
          <Link
        to="/product"
            className="btn btn-primary mt-3"
            style={{ width: "20%" }}
          >
            Explore Investment
          </Link>
        </div>

        {/* Steps Section */}
        <div className="steps-wrapper" style={{ backgroundColor: "rgb(250,250,250)" }}>

          <div className="steps-section">
            <h4 className="text-center mb-5">
              Steps to open a demat account with Zerodha
            </h4>
          </div>

          <div className="steps-card">

            <div className="steps-image">
              <img
                src="media/images/steps-acop.svg"
                alt="Steps to open account"
              />
            </div>

            <div className="steps-content">

              <div className="step-item">
                <span className="step-number">01</span>
                <h5>Enter the requested details</h5>
              </div>

              <div className="step-item">
                <span className="step-number">02</span>
                <h5>Complete e-sign &amp; verification</h5>
              </div>

              <div className="step-item">
                <span className="step-number">03</span>
                <h5>Start investing!</h5>
              </div>

            </div>
          </div>

        </div>
        {/* Steps Section ends here */}

      </div>
      {/* Main container ends here */}

      {/* Benefits Section — outside steps-wrapper */}
      <div className="container my-5">

        <div
          className="row justify-content-center align-items-start g-4 mx-auto"
          style={{ maxWidth: "1100px" }}
        >

          {/* Left: Image + Heading */}
          <div className="col-12 col-md-6 text-center pt-md-4">
            <img
              src="media/images/acop-benefits.svg"
              alt="Benefits of opening a Zerodha account"
              className="img-fluid"
              style={{ maxWidth: "400px", width: "100%" }}
            />

            <h4 className="mt-4 benefit-title">
              Benefits of opening a Zerodha demat account
            </h4>
          </div>

          {/* Right: Headings + Paragraphs */}
          <div className="col-12 col-md-6 benefit-details">

            <div className="benefit-item mb-4">
              <h5>Unbeatable pricing</h5>
              <p>
                Zero charges for equity &amp; mutual fund investments.
                
                Flat ₹20 fees for <br />intraday and F&amp;O trades.
              </p>
            </div>

            <div className="benefit-item mb-4">
              <h5>Best investing experience</h5>
              <p>
                Simple and intuitive trading platform with an
                easy-to-understand user<br /> interface.
              </p>
            </div>

            <div className="benefit-item mb-4">
              <h5>No spam or gimmicks</h5>
              <p>
                Committed to transparency — no gimmicks, spam,
                "gamification", or<br /> intrusive push notifications.
              </p>
            </div>

            <div className="benefit-item mb-4">
              <h5>The Zerodha universe</h5>
              <p>
                More than just an app — gain free access to the
                entire ecosystem of<br /> our partner products.
              </p>
            </div>

          </div>
        </div>
{/* Explore Section */}
<div className="explore-section">

  <h4 className="text-center mb-4">
    Explore different account types
  </h4>

  <div className=" explore-grid">

    {/* 1. Individual Account */}
    <div className=" explore-col">
      <div className="explore-card">
          <div className="explore-icon-box">
              {/* <i className="fa-regular fa-circle-user"></i> */}
                        <CircleUserRound
            size={22}
            strokeWidth={1.7}
            aria-hidden="true"
          />
              </div>
        <div className="explore-content">
          <h5>Individual Account</h5>
          <p>Invest in equity, mutual funds and <br/>derivatives</p>
        </div>
      </div>
    </div>

    {/* 2. NRI Account */}
    <div className=" explore-col">
      <div className="explore-card">
        <div className="explore-icon-box">
           {/* <i className="fa-regular fa-globe"></i> */}
                     <Globe
            size={22}
            strokeWidth={1.7}
            aria-hidden="true"
          />
           </div>
        <div className="explore-content">
          <h5>NRI Account</h5>
          <p>Invest in equity, mutual funds,<br/> debentures, and more</p>
        </div>
      </div>
    </div>

    {/* 3. HUF Account */}
    <div className=" explore-col">
      <div className="explore-card">
                <div className="explore-icon-box">
          {/* <i className="fa-regular fa-users"></i> */}
           <UsersRound
                      size={22}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>
        <div className="explore-content">
          <h5>HUF Account</h5>
          <p>Make tax-efficient investments for <br/>your family</p>
        </div>
      </div>
    </div>

    {/* 4. Minor Account */}
    <div className=" explore-col">
      <div className="explore-card">
                <div className="explore-icon-box">
          <Baby size={22} strokeWidth={1.7} aria-hidden="true" />
        </div>
        <div className="explore-content">
          <h5>Minor Account</h5>
          <p>Teach your little ones about money<br/> and invest for their future</p>
        </div>
      </div>
    </div>

    {/* 5. Corporate Account */}
    <div className=" explore-col">
      <div className="explore-card">
                <div className="explore-icon-box">
          <Building2  
          size={22}
            strokeWidth={1.7}
             aria-hidden="true" />
        </div>
        <div className=" explore-content" size={22} strokeWidth={1.7}>
          <h5>Corporate / LLP / Partnership</h5>
          <p>Manage your business surplus and<br/> investments easily</p>
        </div>
      </div>
    </div>

  </div>
</div>


{/* faq section */}

<div className="zerodha-questions">
  <h4 className="faq-title">FAQs</h4>

  <div className="faq-list">
    {[
      {
        question: "What is Zerodha account?",
        answer: (
          <p>
            A Zerodha account is a combined demat and trading account
            that allows investors to buy, sell, and hold securities digitally.
          </p>
        )
      },
      {
        question: "What documents are required to open a demat account?",
        answer: (
          <>
            <p>The following documents are required to open a Zerodha account online:</p>
            <ol>
              <li>PAN number</li>
              <li>Aadhaar Card (linked with a phone number for OTP verification)</li>
              <li>Cancelled cheque or bank account statement</li>
              <li>Income proof (required only for Futures & Options trading)</li>
            </ol>
          </>
        )
      },
      {
        question: "Is Zerodha account opening free?",
        answer: <p>Yes, it is completely free.</p>
      },
      {
        question: "Are there any AMC (Account Maintenance Charges) for a demat account?",
        answer: (
          <p>
            There is no AMC for the first year on eligible new resident
            individual accounts opened from June 1, 2026. From the second
            year, charges depend on the account type. For Basic Services
            Demat Accounts (BSDA), charges depend on the value of holdings.
            For non-BSDA accounts, annual charges may apply. Check Zerodha's
            official charges page for the latest details.
          </p>
        )
      },
      {
        question: "Can I open a demat account without a bank account?",
        answer: (
          <p>
            No. You must have a bank account in your name to open a
            demat account. Bank verification may require a cancelled
            cheque or bank statement.
          </p>
        )
      },
      {
        question: "What is a Basic Services Demat Account (BSDA)?",
        answer: (
          <p>
            BSDA is a demat account designed for retail investors with
            smaller holdings. Applicable maintenance charges depend on
            the value of your holdings and current rules.
          </p>
        )
      },
      {
        question: "Can I open a demat and trading account using the mobile app?",
        answer: (
          <p>
            Yes, you can open a demat and trading account online using
            Zerodha's account-opening process on a compatible device.
          </p>
        )
      }
    ].map((item, index) => (
      <div className="faq-item" key={index}>
        <button
          className="faq-question"
          onClick={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
          aria-expanded={openIndex === index}
        >
          <span>{item.question}</span>
          <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </button>

        {openIndex === index && (
          <div className="faq-answer">
            {item.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

      </div>

     <div className="container p-5 mb-5">
        <div className="row text-center">

         <h1 className=" open-account mt-5 text-muted" style={{fontSize:"33px"}}> Open a Zerodha account </h1> 
         <p className="para-account mt-4 text-muted" style={{fontSize:"20px"}}> Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
         </p>
         <Link to="/signup" className="p-2 btn btn-primary fs-5 mt-2 mb-5" style={{width:"20%",margin:"0 auto"}}>Signup Now</Link>
        </div>

      </div>
    </>
  );
}

export default Signup;