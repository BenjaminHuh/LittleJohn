import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="navbar">
      <h2 className="littlejohn">LittleJohn</h2>
      <div className="signin-signup">
        <Link to="/signin" className="signin">Sign In</Link>
        <Link to="/signup" className="signup slide_right">Sign Up</Link>
      </div>
    </div>
  );
  const signedIn = () => (
    <div className="signedin-nav">
      <h2 className="header-name">Welcome {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? signedIn() : sessionLinks();
};


export default Navbar;
