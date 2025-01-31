import React from "react";
import "./payment.css";

const PaymentInfo = () => {
  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-row">
          <span className="label">Recurring payment</span>
          <span className="value">$999.00/mo</span>
        </div>

        <div className="payment-row">
          <span className="label">Next payment due</span>
          <span className="value">February 1, 2024</span>
        </div>

        <div className="payment-row">
          <span className="label">Subscription renewal date</span>
          <span className="value">May 22, 2024</span>
        </div>

        <div className="payment-actions">
          <button className="action-btn">Exchange vehicle</button>
          <button className="action-btn">Suspend vehicle</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
