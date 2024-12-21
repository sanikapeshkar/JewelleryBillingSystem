import React from 'react';
import { InputProps } from './Input.types';
import './Input.css';

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  register,
  errors,
  className = '',
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={name} className="input-label">
        {label}
        {required && <span className="required-mark">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className={`input-field ${errors?.[name] ? 'input-error' : ''}`}
        {...register(name, { required: required })}
      />
      {errors?.[name] && (
        <span className="error-message">
          {errors[name]?.message?.toString() || `${label} is required`}
        </span>
      )}
    </div>
  );
};

export default Input; 