'use client';

import React from 'react';
import CustomerForm from '@/components/CustomerForm/CustomerForm';
import GoldRatesTable from '@/components/GoldRatesTable/GoldRatesTable';
import { CustomerFormData } from '@/components/CustomerForm/CustomerForm.types';
import './page.css';

export default function Home() {
  const handleCustomerSubmit = (data: CustomerFormData) => {
    console.log('Customer data:', data);
    // Handle form submission
  };

  return (
    <div className="home-container">
      <div className="customer-section">
        <CustomerForm onSubmit={handleCustomerSubmit} />
      </div>
      <div className="rates-section">
        <GoldRatesTable />
      </div>
    </div>
  );
}
