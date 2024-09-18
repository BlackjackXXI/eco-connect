import React from 'react';

const UserProfile = () => {
  const user = {
    name: "Jane Doe",
    role: "Consumer",
    ecoScore: 92,
  };

  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>EcoScore: {user.ecoScore}</p>
    </div>
  );
};

export default UserProfile;
