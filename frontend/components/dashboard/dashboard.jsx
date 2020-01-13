import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StockContainer from '../stock/stock_container';

const Dashboard = ({ currentUser }) => {
    return (
        <div>
            <NavbarContainer/>
            <div className="dashboard-inner">
                <div className="portfolio-watchlist">
                    
                </div>
                <div className="stock-info">
                    <StockContainer />   
                </div>
                <div className="news">
                </div>
            </div>
        </div>
    );
}

export default Dashboard;