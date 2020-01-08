import React from 'react';
import { Link, useHistory } from 'react-router-dom';



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
      <h2 className="littlejohn">LittleJohn</h2>
      <div className="main-dropdown"> 
        <button className="drop-button">Account</button>
        <div className="drop-menu">
          <h2 className="curr-user">{currentUser.username}</h2>
          <h2>balance</h2>
          <h2 className="logout" onClick={logout}>Log Out</h2>

        </div>
      </div>
    </div>
  );

  return currentUser ? signedIn() : sessionLinks();
};


export default Navbar;
