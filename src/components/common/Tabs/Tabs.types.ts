import { ReactNode } from 'react';

export interface Tab {
  id: string | number;
  label: string;
  icon?: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string | number;
  onTabChange: (tabId: string | number) => void;
  className?: string;
} 