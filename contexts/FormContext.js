import { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    userDetails: {},
    addressDetails: {},
    paymentDetails: {},
  });

  const updateForm = (section, data) => {
    setFormData(prevData => ({ ...prevData, [section]: data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}
