import React, { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
  });

  const [showPw, setShowPw] = useState(false);
  const [msg, setMsg] = useState("");

  function update(e) {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const errors = [];
    if (!form.firstName.trim()) errors.push("First name is required.");
    if (!form.email.trim()) errors.push("Email is required.");
    if (form.password.length < 6) errors.push("Password must be 6+ chars.");
    if (form.password !== form.confirm) errors.push("Passwords do not match.");
    if (!form.terms) errors.push("Please accept terms.");
    setMsg(errors.length ? "✗ " + errors.join(" ") : "✓ Account created!");
  }

  return (
    <div className="page-container">
      {/* brand Section */}
      <div className="brand-badge">
        <img src="/logo192.png" alt="GearUP" />
        <span className="brand-name">GearUP</span>
      </div>

      {/* Register Card */}
      <div className="register-card">
        <h1 className="title-text">REGISTER</h1>

        <form className="form-layout" onSubmit={onSubmit}>
          {/* Name Row */}
          <div className="row-layout">
            <input
              className="input-box input-medium font-regular"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={update}
            />
            <input
              className="input-box input-medium font-regular"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={update}
            />
          </div>

          {/* Email */}
          <input
            className="input-box input-large font-regular"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={update}
          />

          {/* Password */}
          <div className="password-wrap">
            <input
              className="input-box input-large font-regular"
              type={showPw ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={update}
            />
            <button
              type="button"
              className="toggle-btn font-small"
              onClick={() => setShowPw((p) => !p)}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password */}
          <input
            className="input-box input-large font-regular"
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            value={form.confirm}
            onChange={update}
          />

          {/* Terms Checkbox */}
          <label className="checkbox-row font-small">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={update}
            />
            <span>Terms and Conditions</span>
          </label>

          {/* Message */}
          {msg && (
            <div className={`message-box ${msg.startsWith("✓") ? "msg-success" : "msg-error"}`}>
              {msg}
            </div>
          )}

          {/* Submit Button */}
          <button className="btn-primary font-bold">Sign up</button>
        </form>

        <a href="#login" className="login-link font-small">
          Have an account? Login here
        </a>
      </div>
    </div>
  );
}
