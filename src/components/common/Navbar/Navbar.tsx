'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from './Navbar.constants';
import './Navbar.css';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.id}
            href={item.path}
            className={`nav-item ${pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 