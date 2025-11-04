import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(false);
  const [msg, setMsg] = useState("");

  function update(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const errors = [];
    if (!form.email.trim()) errors.push("Email is required.");
    if (!form.password.trim()) errors.push("Password is required.");
    setMsg(errors.length ? "✗ " + errors.join(" ") : "✓ Login successful!");
  }

  return (
    <div className="page-container">
      {/* Brand Section */}
      <div className="brand-badge">
        <img src="/logo192.png" alt="GearUP" />
        <span className="brand-name">GearUP</span>
      </div>

      {/* Login Card */}
      <div className="register-card">
        <h1 className="title-text">LOGIN</h1>

        <form className="form-layout" onSubmit={onSubmit}>
          <input
            className="input-box"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={update}
          />

          <div className="password-wrap">
            <input
              className="input-box"
              type={showPw ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={update}
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPw((p) => !p)}
            >
              {showPw ? "Hide" : "Show"}
            </button>
          </div>

          {msg && (
            <div
              className={`message-box ${
                msg.startsWith("✓") ? "msg-success" : "msg-error"
              }`}
            >
              {msg}
            </div>
          )}

          <button className="btn-primary">Login</button>
        </form>

        {/* Link to Register */}
        <Link to="/register" className="login-link">
          Don’t have an account? Register here
        </Link>
      </div>
    </div>
  );
}
