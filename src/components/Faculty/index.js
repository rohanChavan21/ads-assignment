import React, { useState } from 'react';
import axios from 'axios';

const FacultyComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    ID: '',
    Course: ''
  });
  const [formSubmissionStatus, setFormSubmissionStatus] = useState({
    status: 'idle',
    message: ''
  });

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setFormSubmissionStatus({ status: 'loading', message: '' });
    try {
      await axios.post('http://localhost:5000/submit-form', formData);
      setFormSubmissionStatus({ status: 'success', message: 'Form submitted successfully' });
    } catch (error) {
      setFormSubmissionStatus({ status: 'error', message: error.message });
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="ID">ID:</label>
        <input
          type="text"
          name="ID"
          id="ID"
          value={formData.ID}
          onChange={handleInputChange}
        />

        <label htmlFor="Course">Course:</label>
        <textarea
          name="Course"
          id="Course"
          value={formData.Course}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
      {formSubmissionStatus.status === 'loading' && <p>Submitting form...</p>}
      {formSubmissionStatus.status === 'success' && <p>{formSubmissionStatus.message}</p>}
      {formSubmissionStatus.status === 'error' && <p>Error: {formSubmissionStatus.message}</p>}
    </div>
  );
};

export default FacultyComponent;
