export interface DailyRateFormData {
  metalName: string;
  metalId: string;
  rate: number;
  color: string;
  ld: string;
  gm: string;
  purity: number;
  customerPercentage: number;
  taxInclude: boolean;
  additionalRates: boolean;
  tax: number;
  rateWithTax?: number;
  taxAmount?: number;
  makingCharges: number;
  comments?: string;
}

export interface DailyRateFormProps {
  onSubmitSuccess?: (data: DailyRateFormData) => void;
  onSubmitError?: (error: any) => void;
  initialValues?: Partial<DailyRateFormData>;
} 