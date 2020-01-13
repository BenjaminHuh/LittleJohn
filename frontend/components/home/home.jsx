import React from 'react';
import Main from '../main/main';
import DashboardContainer from '../dashboard/dashboard_container';
// import NavbarContainer from '../navbar/navbar_container'
const Home = ({ currentUser }) => {
    const signedOff = () => (
        <Main />
    )

    const signedIn = () => (
        <DashboardContainer className="dashboard" />
    )

    return currentUser? signedIn() : signedOff();
}

export default Home;