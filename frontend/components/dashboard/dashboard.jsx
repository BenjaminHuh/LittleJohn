import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

const Dashboard = ({ currentUser }) => {
    return (
        <div>
            <NavbarContainer/>
            <div className="portfolio-watchlist">
                
            </div>
            <div className="info">
                {/* either stock or total */}   
            </div>
            <div className="news">
            </div>
        </div>
    );
}

export default Dashboard;