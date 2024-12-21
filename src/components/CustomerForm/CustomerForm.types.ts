export interface CustomerFormData {
  mobileNumber: string;
  title: 'Mr.' | 'Mrs.' | 'Ms.';
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  phoneNumber: string;
  fatherName: string;
  state: string;
  city: string;
  kjj: string;
  address: string;
  gstNumber: string;
  panNumber: string;
  adhaarNumber: string;
  pincode: string;
  userType: string;
  email: string;
}

export interface CustomerFormProps {
  onSubmit: (data: CustomerFormData) => void;
} 