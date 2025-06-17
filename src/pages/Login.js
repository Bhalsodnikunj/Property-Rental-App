import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; // Reuse same styling as Register

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Optional: If you want to store token in state
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
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);

      // Save token to localStorage
      localStorage.setItem('token', res.data.token);

      // Optional: Set token in state
      // setToken(res.data.token);

      setSuccess('Login successful!');
      setFormData({ email: '', password: '' });

      // Optional: redirect to homepage or dashboard
      // window.location.href = '/';
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      {error && <p className="auth-error">{error}</p>}
      {success && <p className="auth-success">{success}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
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

        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
