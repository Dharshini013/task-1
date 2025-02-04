import React from "react";
import "../frontend/VehicleCard.css"; 

const VehicleCard = () => {
  return (
    <div className="vehicle-card">
      <img
        src="src\assets\porsche.png" 
        alt="2016 Porsche Cayman Black Edition"
        className="vehicle-image"
      />
      <div className="vehicle-details">
        <h2>2016 Porsche Cayman Black Edition</h2>
        <p className="vin">WBS2U7C06LF702066</p>
        <span className="badge">Exceptional</span>
        <h5>MEMBERSHIP & SUBSCRIPTION</h5>
        <p>Membership renews: 12/16/24</p>
        <p className="price">$4,995</p>
        <p>Vehicle renews: 8/16/24</p>
        <p className="price">$999/mo</p>
      </div>
      <button className="manage-button">Manage vehicle</button>
    </div>
  );
};

export default VehicleCard;
