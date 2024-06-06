// src/auth/Login.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup, signOut } from '../firebaseConfig';
import './Auth.css';
import logo from '../components/logo.png';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    // Implement email login logic here
  };

  return (
    <div className="modal">
      <img src={logo} alt="Gusto Logo" className="modal-logo" />
      <h2>Login</h2>
      <button className="google-button" onClick={handleGoogleLogin}>Continue with Google</button>
      <p>OR</p>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Continue with Email</button>
      </form>
      <p>
        By signing up, you agree to our <a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Login;
