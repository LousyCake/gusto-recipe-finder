import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  const searchInputRef = useRef(null);

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <Router>
      <div>
        <Navbar onSearchFocus={handleSearchFocus} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <IngredientInput searchInputRef={searchInputRef} />
        <RecipeList /> {/* Add the recipe list here */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
