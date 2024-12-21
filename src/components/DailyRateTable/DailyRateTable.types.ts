export interface DailyRate {
  id: string;
  metalId: string;
  metalName: string;
  latestRate: number;
  purity: number;
  purityCarat: number;
  updatedAt: string;
}

export interface DailyRateTableProps {
  rates: DailyRate[];
  onDelete: (id: string) => void;
} 