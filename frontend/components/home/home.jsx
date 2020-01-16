import React from 'react';
import Main from '../main/main';
import DashboardContainer from '../dashboard/dashboard_container';
// import NavbarContainer from '../navbar/navbar_container'
const Home = ({ currentUser, history, match }) => {
    const signedOff = () => (
        <Main />
    )

    const signedIn = () => {
        return (
        <DashboardContainer className="dashboard" match={ match } history={ history }/>
        );
    }

    return currentUser? signedIn() : signedOff();
}

export default Home;