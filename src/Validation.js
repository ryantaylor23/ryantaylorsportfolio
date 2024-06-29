import React, { useState } from 'react';
import './style.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const phonePattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };

    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'This field is required.';
      isValid = false;
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'This field is required.';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'This field is required.';
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Must be a valid email address.';
      isValid = false;
    }

    if (formData.phone.trim() === '') {
      newErrors.phone = 'This field is required.';
      isValid = false;
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Must be 555-555-5555 format';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Thank you for Contacting Me!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });

    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <span style={{ color: 'red' }}>{errors.firstName}*</span>
        </div>
        <div className="mb-5">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <span style={{ color: 'red' }}>{errors.lastName}*</span>
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email:</label>
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span style={{ color: 'red' }}>{errors.email}*</span>
        </div>
        <div className="mb-5">
          <label htmlFor="phone">Phone:</label>
          {'\t'}
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <span style={{ color: 'red' }}>{errors.phone}*</span>
        </div>
        <button className="button mb-5" type="submit">
          Submit
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="button mb-5" type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
