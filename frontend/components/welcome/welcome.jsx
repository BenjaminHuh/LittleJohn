import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

const Welcome = ({ currentUser }) => {
    return (
        <div>
            <NavbarContainer/>
            <h1>main page after signing in</h1>
        </div>
    );
}

export default Welcome;