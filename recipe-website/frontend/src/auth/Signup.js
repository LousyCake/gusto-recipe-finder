// src/auth/Signup.js
import React, { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from '../firebaseConfig';
import './Auth.css';
import logo from '../components/logo.png';

const Signup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    // Implement email signup logic here
  };

  return (
    <div className="modal">
      <img src={logo} alt="Gusto Logo" className="modal-logo" />
      <h2>Signup</h2>
      <button className="google-button" onClick={handleGoogleSignup}>Continue with Google</button>
      <p>OR</p>
      <form onSubmit={handleEmailSignup}>
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
        <button type="submit">Signup with Email</button>
      </form>
      <p>
        By signing up, you agree to our <a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Signup;
