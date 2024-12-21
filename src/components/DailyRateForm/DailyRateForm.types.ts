export interface DailyRateFormData {
  metalId: string;
  metalName: string;
  ratePerGram: number;
  tax: number;
  color: string;
  makingCharges: number;
  comments?: string;
}

export interface DailyRateFormProps {
  onSubmitSuccess?: (data: DailyRateFormData) => void;
  onSubmitError?: (error: any) => void;
  initialValues?: Partial<DailyRateFormData>;
} 