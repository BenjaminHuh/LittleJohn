import React from 'react';
import Main from '../main/main';
import DashboardContainer from '../dashboard/dashboard_container';
import NavbarContainer from '../navbar/navbar_container'
const Home = ({ currentUser, history, match }) => {
    const signedOff = () => (
        <div>
            <NavbarContainer/>
            <Main />
        </div>
    )

    const signedIn = () => {
        return (
            <div>
                {/* <NavbarContainer/> */}
                <DashboardContainer className="dashboard" match={ match } history={ history }/>
            </div>
        );
    }

    return currentUser? signedIn() : signedOff();
}

export default Home;