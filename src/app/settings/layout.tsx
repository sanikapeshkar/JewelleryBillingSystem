import React from 'react';
import './styles.css';

export const metadata = {
  title: 'Settings - Jewelry Management',
  description: 'Manage your jewelry store settings',
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="settings-layout">
      {children}
    </section>
  );
} 