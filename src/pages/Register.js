import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; // Assuming shared styles for login/register




const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // If you plan to store the token in state (optional)
  // const [token, setToken] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      
      // Store token in localStorage
      localStorage.setItem('token', res.data.token);

      // If you're using setToken (optional)
      // setToken(res.data.token);

      setSuccess('Registration successful!');
      setFormData({ name: '', email: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      {error && <p className="auth-error">{error}</p>}
      {success && <p className="auth-success">{success}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Name:
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </label>

        <button type="submit" className="auth-button">Register</button>
      </form>
      
    </div>
  
  );
};

export default Register;
