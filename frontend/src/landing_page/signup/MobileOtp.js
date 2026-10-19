
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MobileOTP() {
  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone || "";
  const demoOtp = "123456";

  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const handleOtpChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
  };

  const handleResend = () => {
    if (seconds > 0) return;

    setOtp("");
    setSeconds(20);

    alert("Demo OTP is 123456. No SMS was sent.");
  };

//   const handleContinue = async(e) => {
//     e.preventDefault();

//     if (otp.length !== 6) {
//       alert("Please enter the 6-digit OTP.");
//       return;
//     }

//     if (otp !== demoOtp) {
//       alert("Incorrect OTP. Please enter 123456.");
//       setOtp("");
//       return;
//     }

  
//     if (!phone) {
//     alert("Mobile number missing. Please sign up again.");
//     navigate("/signup");
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:3002/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ phone }),
//     });

//     const data = await response.json();

//     if (response.status === 201) {
//       alert("Demo verification successful! Mobile number saved.");
//       window.location.href = "http://localhost:3003/";
//     } else if (response.status === 409) {
//       alert("This mobile number is already registered.");
//     } else {
//       alert(data.message || "Signup failed. Please try again.");
//     }
//   } catch (error) {
//     console.error("Signup error:", error);
//     alert("Backend se connection nahi ho raha. Please check the backend.");
//   }
// };
   

const handleContinue = async (e) => {
  e.preventDefault();

  if (otp.length !== 6) {
    alert("Please enter the 6-digit OTP.");
    return;
  }

  if (otp !== demoOtp) {
    alert("Incorrect OTP. Please enter 123456.");
    setOtp("");
    return;
  }

  if (!phone) {
    alert("Mobile number missing. Please sign up or login again.");
    navigate("/signup");
    return;
  }

  try {
    const mode = location.state?.mode;
    const endpoint =
      mode === "login"
        ? "http://localhost:3002/login"
        : "http://localhost:3002/signup";

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Demo verification successful!");
      window.location.href = "http://localhost:3001/";
    } else {
      alert(data.message || "Please try again.");
    }
  } catch (error) {
    console.error("Backend error:", error);
    alert("Backend se connection nahi ho raha.");
  }
};

 
 

  return (
    <div className="mobile-otp-page">
      <main className="otp-main">
        <div className="otp-illustration">
          <div className="illustration-circle"></div>

          <div className="illustration-user">
            <i className="fa-regular fa-user"></i>
          </div>

          <div className="illustration-card">
            <div className="illustration-mail">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <div className="illustration-lines">
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="illustration-message">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="illustration-dots">•　•　•</div>
        </div>

        <div className="otp-form-section">
          <h1>Mobile OTP</h1>

          <p className="otp-sent-text">
            Mobile number: +91 {phone || "Not provided"}{" "}
            <a href="/signup">(change)</a>
          </p>

          <p className="otp-help-text">
            Demo Mode: Enter 123456 to continue.
            No SMS will be sent.
          </p>

          <form onSubmit={handleContinue}>
            <div className="otp-input-wrapper">
              <div className="otp-phone-icon">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>

              <div className="otp-field">
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  value={otp}
                  onChange={handleOtpChange}
                  aria-label="Enter 6-digit demo OTP"
                  autoFocus
                />

                {otp.length === 0 && (
                  <div className="otp-placeholder-dots">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <span key={index}></span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <p className="otp-resend-text">
              {seconds > 0 ? (
                <>Resend demo code in {seconds} seconds</>
              ) : (
                <button
                  type="button"
                  className="otp-resend-button"
                  onClick={handleResend}
                >
                  Show Demo OTP Again
                </button>
              )}
            </p>
          </form>
        </div>
      </main>

      <footer className="otp-footer">
        <button
          type="button"
          className="otp-continue-button"
          disabled={otp.length !== 6}
          onClick={handleContinue}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

export default MobileOTP;
