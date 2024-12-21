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

  const rate = watch('rate', 0);
  const tax = watch('tax', 0);
  const customerPercentage = watch('customerPercentage', 0);

  const calculateTaxAmount = () => {
    const baseAmount = rate || 0;
    return ((baseAmount * (tax || 0)) / 100).toFixed(2);
  };

  const calculateRateWithTax = () => {
    const baseAmount = rate || 0;
    const taxAmount = (baseAmount * (tax || 0)) / 100;
    return (baseAmount + taxAmount).toFixed(2);
  };

  const onSubmit = async (data: DailyRateFormData) => {
    try {
      const formData = {
        ...data,
        rateWithTax: calculateRateWithTax(),
        taxAmount: calculateTaxAmount(),
      };
      
      onSubmitSuccess?.(formData);
    } catch (error) {
      onSubmitError?.(error);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="daily-rate-form">
      <h2 className="form-title">DAILY RATES PANEL</h2>
      
      <div className="form-row">
        <Input
          label="Gold"
          name="metalName"
          register={register}
          errors={errors}
        />
      </div>

      <div className="form-row">
        <Input
          label="Id"
          name="metalId"
          register={register}
          errors={errors}
        />
      </div>

      <div className="form-row split">
        <div>
          <Input
            label="RATE"
            name="rate"
            type="number"
            register={register}
            errors={errors}
          />
          <span className="note-text">(Accept only Numeric Value)</span>
        </div>
        <Input
          label="COLOR"
          name="color"
          register={register}
          errors={errors}
        />
      </div>

      <div className="form-row split-three">
        <Input
          label="LD"
          name="ld"
          register={register}
          errors={errors}
        />
        <Input
          label="GM"
          name="gm"
          register={register}
          errors={errors}
        />
        <Input
          label="PURITY%"
          name="purity"
          type="number"
          register={register}
          errors={errors}
        />
      </div>

      <div className="form-row">
        <Input
          label="Customer Percentage"
          name="customerPercentage"
          type="number"
          register={register}
          errors={errors}
        />
      </div>

      <div className="checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            {...register('taxInclude')}
          />
          TAX INCLUDE
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            {...register('additionalRates')}
          />
          ADDITIONAL RATES
        </label>
      </div>

      <div className="form-row split-three">
        <Input
          label="Tax %"
          name="tax"
          type="number"
          register={register}
          errors={errors}
        />
        <Input
          label="RATE WITH TAX"
          name="rateWithTax"
          type="number"
          register={register}
          errors={errors}
          value={calculateRateWithTax()}
          disabled
        />
        <Input
          label="TAX AMOUNT"
          name="taxAmount"
          type="number"
          register={register}
          errors={errors}
          value={calculateTaxAmount()}
          disabled
        />
      </div>

      <div className="form-row">
        <Input
          label="MAKING CHARGES"
          name="makingCharges"
          type="number"
          register={register}
          errors={errors}
          placeholder="GM"
        />
      </div>

      <div className="form-row">
        <Input
          label="COMMENT"
          name="comments"
          register={register}
          errors={errors}
        />
      </div>

      <div className="form-actions">
        <Button
          type="submit"
          loading={isSubmitting}
          fullWidth
        >
          SUBMIT
        </Button>
      </div>
    </form>
  );
};

export default DailyRateForm; 