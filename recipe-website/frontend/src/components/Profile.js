import React, { useState, useEffect } from 'react';
import { auth, storage, db } from '../firebaseConfig'; // Ensure db and storage are imported correctly
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [profilePicURL, setProfilePicURL] = useState('');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);
  
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData.username);
          setProfilePicURL(userData.profilePicURL);
          setSavedRecipes(userData.savedRecipes || []);
          setCreatedRecipes(userData.createdRecipes || []);
        }
      }
    });
  }, []);
  
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `profilePics/${user.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress function
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProfilePicURL(downloadURL);
          setDoc(doc(db, 'users', user.uid), { profilePicURL: downloadURL }, { merge: true });
        });
      }
    );
  };

  const handleSave = () => {
    setDoc(doc(db, 'users', user.uid), { username, profilePicURL }, { merge: true });
  };

  return (
    <div className="profile">
      <div className="profile-sidebar">
        <img src={profilePicURL || 'default-profile.png'} alt="Profile" className="profile-pic" />
        <input type="file" onChange={handleProfilePicUpload} />
        <button onClick={handleSave}>Save Profile</button>
      </div>
      <div className="profile-content">
        <div className="profile-header">
          <h2>Profile</h2>
          <div className="profile-info">
            <div className="profile-field">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <input type="text" value={user?.email} disabled />
            </div>
          </div>
        </div>
        <div className="profile-section">
          <h3>Saved Recipes</h3>
          <div className="recipe-list">
            {savedRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-section">
          <h3>Created Recipes</h3>
          <div className="recipe-list">
            {createdRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.name} />
                <p>{recipe.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
