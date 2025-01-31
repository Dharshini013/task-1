import React, { useState } from 'react';
import './apply.css';

const Apply = () => {
    return (
      <div className="apply-container">
        <div className="apply-card">
          <div className="apply-icon">
          </div>
          <h2>Are you applying as a sole member or with a co-member?</h2>
          <p>
            Would you like to fill out an application for yourself or are you
            filling out an application with a co-member?
          </p>
          <div className="apply-buttons">
            <button className="btn btn-light">With a co-member</button>
            <button className="btn btn-dark">It's just me</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Apply;