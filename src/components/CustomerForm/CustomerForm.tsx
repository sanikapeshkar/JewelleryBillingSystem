'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Input/Input';
import { CustomerFormData, CustomerFormProps } from './CustomerForm.types';
import './CustomerForm.css';

const CustomerForm: React.FC<CustomerFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="customer-form">
      <div className="form-grid">
        <div className="form-group">
          <Input
            label="Mobile Number"
            name="mobileNumber"
            register={register}
            errors={errors}
            required
          />
        </div>

        <div className="form-group title-group">
          <select {...register('title')} className="title-select">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>

        <div className="form-group">
          <Input
            label="First Name"
            name="firstName"
            register={register}
            errors={errors}
            required
          />
        </div>

        <div className="form-group">
          <Input
            label="Last Name"
            name="lastName"
            register={register}
            errors={errors}
            required
          />
        </div>

        <div className="gender-group">
          <label>
            <input
              type="radio"
              {...register('gender')}
              value="male"
            /> Male
          </label>
          <label>
            <input
              type="radio"
              {...register('gender')}
              value="female"
            /> Female
          </label>
        </div>

        <div className="form-group">
          <Input
            label="Phone Number"
            name="phoneNumber"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <Input
            label="Father Name"
            name="fatherName"
            register={register}
            errors={errors}
          />
        </div>

        <div className="location-group">
          <select {...register('state')} className="state-select">
            <option value="Maharashtra">Maharashtra</option>
            {/* Add other states */}
          </select>
          <Input
            label="City / Village"
            name="city"
            register={register}
            errors={errors}
          />
          <Input
            label="KJJ"
            name="kjj"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group full-width">
          <Input
            label="Address"
            name="address"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <Input
            label="GST Number"
            name="gstNumber"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <Input
            label="PAN Number"
            name="panNumber"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <Input
            label="Adhaar Card Number"
            name="adhaarNumber"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <Input
            label="PINCODE"
            name="pincode"
            register={register}
            errors={errors}
          />
        </div>

        <div className="form-group">
          <select {...register('userType')} className="user-type-select">
            <option value="Customer">Customer</option>
            {/* Add other user types */}
          </select>
        </div>

        <div className="form-group">
          <Input
            label="EMAIL ID"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
        </div>
      </div>
    </form>
  );
};

export default CustomerForm; 