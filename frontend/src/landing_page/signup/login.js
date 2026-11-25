import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const mobile = phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    navigate("/mobile-otp", {
      state: {
        phone: mobile,
        mode: "login",
      },
    });
  };

  return (
    <div className="login-page container-fluid d-flex justify-content-center align-items-center px-3 py-4">
      <div className="login-container w-100">
        <h1>Login to Zerodha</h1>

        <p>Enter your registered mobile number to continue.</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="login-phone">Mobile number</label>

          <div className="login-phone-input d-flex align-items-center">
            <span>+91</span>

            <input
              id="login-phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter mobile number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              required
            />
          </div>

          <button type="submit" className="w-100">
            Continue
          </button>
        </form>

        <p className="login-signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

        <p className="login-demo-note">
          Demo mode: OTP is 123456. No SMS will be sent.
        </p>
      </div>
    </div>
  );
}

export default Login;
