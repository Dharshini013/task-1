import React, { useState } from "react";
import "./change.css";

const memberships = [
  {
    name: "Essential membership",
    price: "+ $0",
    vehicleSubscription: "$499/mo",
    twoYearMembership: "$2,995",
    color: "#3c8c76",
  },
  {
    name: "Elevated membership",
    price: "Current Membership",
    vehicleSubscription: "$699/mo",
    twoYearMembership: "$3,995",
    color: "#b0c4de",
    isCurrent: true,
  },
  {
    name: "Exceptional membership",
    price: "+ $1,000",
    vehicleSubscription: "$999/mo",
    twoYearMembership: "$4,995",
    color: "#ffd700",
  },
  {
    name: "Extraordinary membership",
    price: "+ $5,995",
    vehicleSubscription: "Starting at $1,299/mo",
    twoYearMembership: "Starting at $10,000",
    color: "#dc143c",
  },
];

const ChangeMembership = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="change-container">
      <div className="change-card">
        <div className="change-header">
          <h2>Change your membership</h2>
          <button className="close-btn">×</button>
        </div>
        <p className="change-desc">
          Select the membership that you'd like to change to. Please keep in
          mind that if you upgrade your membership, you'll have to pay the
          prorated membership fee.
        </p>
        <h4 className="change-subtitle">Select your new membership</h4>

        <div className="membership-list">
          {memberships.map((item, index) => (
            <div
              key={index}
              className={`membership-item ${
                selected === index ? "selected" : ""
              }`}
              style={{ borderColor: selected === index ? item.color : "#ddd" }}
              onClick={() => setSelected(index)}
            >
              <div className="membership-icon" style={{ background: item.color }}>
                ★
              </div>
              <div className="membership-info">
                <h3>{item.name}</h3>
                <p>Vehicle subscription: {item.vehicleSubscription}</p>
                <p>2-year membership: {item.twoYearMembership}</p>
              </div>
              <span className={`membership-price ${item.isCurrent ? "current" : ""}`}>
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="change-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="browse-btn">Browse vehicles</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeMembership;
