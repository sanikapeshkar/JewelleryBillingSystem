import React from 'react';
import './RatesBar.css';
import { RatesBarProps } from './RatesBar.types';

const RatesBar: React.FC<RatesBarProps> = ({ goldRate, silverRate }) => {
  return (
    <div className="rates-bar">
      <div className="rates-container">
        <div className="rate-item">
          <span className="rate-label">GOLD</span>
          <span className="rate-value">₹{goldRate}/10GM</span>
        </div>
        <div className="rate-item">
          <span className="rate-label">MCX Gold:</span>
          <span className="rate-value">52XXX</span>
        </div>
        <div className="rate-item">
          <span className="rate-label">MCX Silver:</span>
          <span className="rate-value">68XXX</span>
        </div>
        <div className="rate-item">
          <span className="rate-label">SILVER</span>
          <span className="rate-value">₹{silverRate}/KG</span>
        </div>
      </div>
    </div>
  );
};

export default RatesBar; 