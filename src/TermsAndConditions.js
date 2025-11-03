import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div
      className="terms-page"
      style={{
        backgroundImage: "url('/car-bg.jpg')", // from public folder
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "cover",
      }}
    >
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="intro">
          Welcome to <b>GearUP</b>. By registering or using our services,
          you agree to follow the terms below. Please read them carefully.
        </p>

        <div className="section">
          <h3>1. Account Responsibility</h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account details and for all activities that occur under your account.
            Notify us immediately of any unauthorized use.
          </p>
        </div>

        <div className="section">
          <h3>2. Vehicle Usage</h3>
          <p>
            Vehicles rented through GearUP must be used lawfully and returned in
            the same condition. Damage, loss, or misuse may incur additional
            charges.
          </p>
        </div>

        <div className="section">
          <h3>3. Payments & Refunds</h3>
          <p>
            Payments are processed securely through our verified partners. Refund
            eligibility depends on the timing of cancellations and vehicle
            condition upon return.
          </p>
        </div>

        <div className="section">
          <h3>4. Data Privacy</h3>
          <p>
            Your personal data will only be used for booking, communication, and
            verification purposes, in line with our Privacy Policy.
          </p>
        </div>

        <div className="section">
          <h3>5. Agreement</h3>
          <p>
            By clicking <b>“Register”</b> or using our services, you confirm that
            you have read, understood, and agree to these Terms & Conditions.
          </p>
        </div>

        <div className="back-btn">
          <a href="/register" className="btn-back">← Back to Register</a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
