import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { DailyRateFormData, DailyRateFormProps } from './DailyRateForm.types';
import './DailyRateForm.css';

const DailyRateForm: React.FC<DailyRateFormProps> = ({
  onSubmitSuccess,
  onSubmitError,
  initialValues,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<DailyRateFormData>({
    defaultValues: {
      tax: 3,
      makingCharges: 0,
      ...initialValues,
    },
  });

  // Watch values for calculating total
  const ratePerGram = watch('ratePerGram', 0);
  const tax = watch('tax', 0);
  const makingCharges = watch('makingCharges', 0);

  // Calculate total amount with tax and making charges
  const calculateTotal = () => {
    const baseAmount = ratePerGram || 0;
    const taxAmount = (baseAmount * (tax || 0)) / 100;
    const total = baseAmount + taxAmount + (makingCharges || 0);
    return total.toFixed(2);
  };

  const onSubmit = async (data: DailyRateFormData) => {
    try {
      const formData = {
        ...data,
        totalAmount: calculateTotal(),
      };
      
      onSubmitSuccess?.(formData);
    } catch (error) {
      onSubmitError?.(error);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="daily-rate-form">
      <h2 className="form-title">Set Daily Metal Rate</h2>
      
      <div className="form-grid">
        <Input
          label="Metal ID"
          name="metalId"
          required
          register={register}
          errors={errors}
          placeholder="Enter metal ID"
        />

        <Input
          label="Metal Name"
          name="metalName"
          required
          register={register}
          errors={errors}
          placeholder="e.g., Gold, Silver"
        />

        <Input
          label="Rate per Gram"
          name="ratePerGram"
          type="number"
          required
          register={register}
          errors={errors}
          placeholder="Enter rate per gram"
        />

        <Input
          label="Tax (%)"
          name="tax"
          type="number"
          required
          register={register}
          errors={errors}
          placeholder="Enter tax percentage"
        />

        <Input
          label="Color"
          name="color"
          register={register}
          errors={errors}
          placeholder="e.g., Yellow, White"
        />

        <Input
          label="Making Charges"
          name="makingCharges"
          type="number"
          register={register}
          errors={errors}
          placeholder="Enter making charges"
        />
      </div>

      <div className="form-full-width">
        <Input
          label="Comments"
          name="comments"
          register={register}
          errors={errors}
          placeholder="Add any additional comments"
        />
      </div>

      <div className="total-amount">
        <span className="total-label">Total Amount (with tax):</span>
        <span className="total-value">₹ {calculateTotal()}</span>
      </div>

      <div className="form-actions">
        <Button
          type="submit"
          loading={isSubmitting}
          fullWidth
        >
          Save Daily Rate
        </Button>
      </div>
    </form>
  );
};

export default DailyRateForm; 