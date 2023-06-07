// src/components/ProfileSetting.js

import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar';

const ProfileSetting = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  // Add additional state variables for other fields

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the settings
  };

  return (

    <><Topbar />
     <div className="profile-setting">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" value={bio} onChange={handleBioChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        {/* Add additional fields */}
        <button type="submit">Save</button>
      </form>
    </div>
    </>
   
  );
};

export default ProfileSetting;
