import React from 'react';
import { DailyRate, DailyRateTableProps } from './DailyRateTable.types';
import './DailyRateTable.css';

const DailyRateTable: React.FC<DailyRateTableProps> = ({ rates, onDelete }) => {
  return (
    <div className="daily-rate-table-container">
      <table className="daily-rate-table">
        <thead>
          <tr>
            <th>Metal ID</th>
            <th>Metal Name</th>
            <th>Latest Rate</th>
            <th>Purity (%)</th>
            <th>Purity (K)</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.id}>
              <td>{rate.metalId}</td>
              <td>{rate.metalName}</td>
              <td>₹ {rate.latestRate.toFixed(2)}</td>
              <td>{rate.purity}%</td>
              <td>{rate.purityCarat}K</td>
              <td>{new Date(rate.updatedAt).toLocaleDateString()}</td>
              <td>
                <button 
                  className="delete-button"
                  onClick={() => onDelete(rate.id)}
                  aria-label="Delete rate"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyRateTable; 