'use client';

import React from 'react';
import DailyRateForm from '@/components/DailyRateForm/DailyRateForm';
import './styles.css';

const DailyRatePage = () => {
  const handleSubmitSuccess = (data: any) => {
    // Handle successful submission
    console.log('Form submitted successfully:', data);
  };

  const handleSubmitError = (error: any) => {
    // Handle submission error
    console.error('Form submission error:', error);
  };

  return (
    <div className="daily-rate-page">
      <h1 className="page-title">Daily Rate Settings</h1>
      <DailyRateForm 
        onSubmitSuccess={handleSubmitSuccess}
        onSubmitError={handleSubmitError}
      />
    </div>
  );
};

export default DailyRatePage; 