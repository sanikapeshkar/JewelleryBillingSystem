import React from 'react';
import './GoldRatesTable.css';

interface GoldRate {
  type: string;
  purity: string;
  rate: number;
}

const GoldRatesTable: React.FC = () => {
  const rates: GoldRate[] = [
    { type: 'GOLD', purity: '24 K', rate: 72000 },
    { type: 'GOLD-91.67', purity: '22 K', rate: 67000 },
    { type: 'GOLD-83.34', purity: '20 K', rate: 61000 },
  ];

  return (
    <div className="gold-rates-container">
      <h2 className="rates-title">आज का भाव</h2>
      <div className="rates-table">
        {rates.map((rate, index) => (
          <div key={index} className="rate-row">
            <div className="rate-type">
              {rate.type} ({rate.purity})
            </div>
            <div className="rate-value">
              ₹. {rate.rate.toLocaleString()} (GM)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoldRatesTable; 