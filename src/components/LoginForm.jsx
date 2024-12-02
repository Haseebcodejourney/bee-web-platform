import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const dummyUsername = 'admin';
  const dummyPassword = 'admin123';

  const navigate = useNavigate(); // Hook to navigate after login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (username === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    if (username !== dummyUsername || password !== dummyPassword) {
      setError('Invalid username or password.');
      return;
    }

    // Simulate login success
    setError('');
    alert('Login successful!');

    // Optionally handle "Keep me logged in" logic
    if (keepLoggedIn) {
      console.log('User opted to stay logged in');
    }
    
    // Reset form fields
    setUsername('');
    setPassword('');

    // Redirect to the HomePage after successful login
    navigate('/home');
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="input-wrapper">
          <label>User Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="login-session">
          <div className="keep-login checkbox">
            {/* 
            <input
              id="checkbox1"
              type="checkbox"
              name="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={() => setKeepLoggedIn(!keepLoggedIn)}
            />
            <label htmlFor="checkbox1">Keep me logged in</label>
            */}
          </div>
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
        </div>
        <button type="submit" id="rippleButton">Login</button>
        {error && <div className="error input-error">{error}</div>}
        <div className="register">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </>
  );
}
