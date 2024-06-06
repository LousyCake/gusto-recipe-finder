import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaSearch, FaBookmark, FaUser } from 'react-icons/fa';
import logo from './logo.png';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Navbar = ({ onSearchFocus }) => {
  const [bookmarkOpen, setBookmarkOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const bookmarkRef = useRef(null);
  const profileRef = useRef(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    onSearchFocus();
  };

  const toggleBookmark = () => {
    setBookmarkOpen(!bookmarkOpen);
    setProfileOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setBookmarkOpen(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setProfileOpen(false);
      navigate('/profile');
    } catch (error) {
      console.error("Google login error: ", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setProfileOpen(false);
      navigate('/profile');
    } catch (error) {
      console.error("Email login error: ", error);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target) && profileOpen) {
      setProfileOpen(false);
    }
  }, [profileOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Gusto Logo" className="navbar-logo" />
        </div>
        <div className="navbar-center">
          <div className="dropdown">
            <button className="dropbtn">Explore</button>
            <div className="dropdown-content">
              <a href="#trending">Trending Recipes</a>
              <a href="#new">New Arrivals</a>
              <a href="#editors-picks">Editor's Picks</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Cuisine</button>
            <div className="dropdown-content">
              <a href="#asian">Asian</a>
              <a href="#european">European</a>
              <a href="#american">American</a>
              <a href="#middle-eastern">Middle Eastern</a>
              <a href="#african">African</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Diet</button>
            <div className="dropdown-content">
              <a href="#vegetarian">Vegetarian</a>
              <a href="#vegan">Vegan</a>
              <a href="#gluten-free">Gluten-Free</a>
              <a href="#keto">Keto</a>
              <a href="#paleo">Paleo</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Occasions</button>
            <div className="dropdown-content">
              <a href="#holidays">Holidays</a>
              <a href="#festive">Festive</a>
              <a href="#seasonal">Seasonal</a>
              <a href="#special-events">Special Events</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Health</button>
            <div className="dropdown-content">
              <a href="#low-calorie">Low Calorie</a>
              <a href="#high-protein">High Protein</a>
              <a href="#heart-healthy">Heart Healthy</a>
              <a href="#diabetes-friendly">Diabetes-Friendly</a>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <FaSearch className="icon" onClick={handleSearchClick} />
          <div className="dropdown" ref={bookmarkRef}>
            <FaBookmark className="icon" onClick={toggleBookmark} />
            {bookmarkOpen && (
              <div className="dropdown-content">
                <h3>Bookmarked Recipes</h3>
                {/* Display bookmarked recipes here */}
                <p>No bookmarks yet.</p>
              </div>
            )}
          </div>
          <div className="dropdown" ref={profileRef}>
            <FaUser className="icon" onClick={toggleProfile} />
          </div>
        </div>
      </nav>

      {profileOpen && (
        <div className="modal-overlay">
          <div className="modal" ref={modalRef}>
            <img src={logo} alt="Gusto Logo" className="modal-logo" />
            <h2>Login</h2>
            <button className="modal-button google-button" onClick={handleGoogleLogin}>Continue with Google</button>
            <p>OR</p>
            <input
              type="text"
              placeholder="Email"
              className="modal-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="modal-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="modal-button email-button" onClick={handleEmailLogin}>Continue with Email</button>
            <hr />
            <p className="modal-footer">
              By signing up, you agree to our <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
