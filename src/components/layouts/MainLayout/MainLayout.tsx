import React from 'react';
import RatesBar from '@/components/common/RatesBar/RatesBar';
import Navbar from '@/components/common/Navbar/Navbar';
import { MainLayoutProps } from './MainLayout.types';
import './MainLayout.css';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // In a real app, these would come from an API or state management
  const currentRates = {
    goldRate: 72000,
    silverRate: 68000,
  };

  return (
    <div className="main-layout">
      <RatesBar 
        goldRate={currentRates.goldRate}
        silverRate={currentRates.silverRate}
      />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 