import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send data to the server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
