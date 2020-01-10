import React from 'react';
import Main from '../main/main';
import DashboardContainer from '../dashboard/dashboard_container';

const Home = ({ currentUser }) => {
    const signedOff = () => (
        <Main />
    )

    const signedIn = () => (
        <DashboardContainer />
    )

    return currentUser? signedIn() : signedOff();
}

export default Home;