'use client';

import React, { useState } from 'react';
import DailyRateForm from '@/components/DailyRateForm/DailyRateForm';
import DailyRateTable from '@/components/DailyRateTable/DailyRateTable';
import { DailyRateFormData } from '@/components/DailyRateForm/DailyRateForm.types';
import { DailyRate } from '@/components/DailyRateTable/DailyRateTable.types';
import './styles.css';

const DailyRatePage = () => {
  const [rates, setRates] = useState<DailyRate[]>([]);

  const handleSubmitSuccess = (data: DailyRateFormData) => {
    const newRate: DailyRate = {
      id: Date.now().toString(), // In real app, this would come from backend
      metalId: data.metalId,
      metalName: data.metalName,
      latestRate: data.ratePerGram,
      purity: data.purity,
      purityCarat: data.purityCarat || 0,
      updatedAt: new Date().toISOString(),
    };

    setRates([newRate, ...rates]);
  };

  const handleDelete = (id: string) => {
    setRates(rates.filter(rate => rate.id !== id));
  };

  return (
    <div className="daily-rate-page-main">
    <div className="daily-rate-page">

      <DailyRateForm 
        onSubmitSuccess={handleSubmitSuccess}
        onSubmitError={(error) => console.error(error)}
      />
      <DailyRateTable 
        rates={rates}
        onDelete={handleDelete}
      />
    </div>
    </div>
  );
};

export default DailyRatePage; 