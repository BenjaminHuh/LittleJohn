import React from 'react';
import { Link, useHistory } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {

  const sessionLinks = () => (
    <div className="navbar">
      <Link to="/" className="littlejohn">LittleJohn</Link>
      <div className="signin-signup">
        <Link to="/signin" className="signin">Sign In</Link>
        <Link to="/signup" className="signup slide_right">Sign Up</Link>
      </div>
    </div>
  );
  const signedIn = () => (
    <div className="signedin-nav">
      <Link to="/" className="littlejohn">LittleJohn</Link>
      <div className="main-dropdown"> 
        <button className="drop-button">Account</button>
        <div className="drop-menu">
          <h2 className="curr-user">{currentUser.username}</h2>
          {/* <a className="curr-user" href={`/api/users/${currentUser.id}`}>{currentUser.username}</a> */}
          <h2>balance</h2>
          <h2 className="logout" onClick={logout}>Log Out</h2>

        </div>
      </div>
    </div>
  );

  return currentUser ? signedIn() : sessionLinks();
};


export default Navbar;
