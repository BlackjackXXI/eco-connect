import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">EcoConnect</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
          <li><Link to="/search" className="hover:underline">Search</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
