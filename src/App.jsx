import React from 'react';
import SignInPage from './frontend/SignInPage';
import VehicleCard from './frontend/VehicleCard';
import Apply from './frontend/apply';
import ChangeMembership from './frontend/change';
import AddDocument from './frontend/add';
import PaymentInfo from './frontend/payment';
import './App.css'; // Import CSS for layout

const App = () => {
  return (
    <body className="app-body">
    <div className="app-container">
      <div className="grid-layout">
        <div className="a11 a21"><SignInPage /></div>
        <div className="a12 a13"><VehicleCard /></div>
        <div className="a22"><Apply /></div>
        <div className="a23 a33"><ChangeMembership /></div>
        <div className="a31"><PaymentInfo /></div>
        <div className="a32"><AddDocument /></div>
      </div>
    </div>
    </body>
  );
};

export default App;
