import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  className?: string;
} 