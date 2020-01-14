import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StockContainer from '../stock/stock_container';

const Dashboard = ({ match, currentUser, history }) => {


    const showPortfolio = () => {
        return (
            <div>
                <NavbarContainer match={ match } history={history} />
                <div className="dashboard-inner">
                    <div className="portfolio-watchlist">
                        
                    </div>
                    <div className="stock-info">
                        <StockContainer match={ match } history={history} />
                        {/* <StockContainer match={ match } />    */}
                    </div>
                    <div className="news">
                    </div>
                </div>
            </div>
        )
        
    }

    const showStock = () => {
        return (
            <div>
                <NavbarContainer match={ match } history={history} />
                <div className="dashboard-inner">
                    <div className="portfolio-watchlist">
                        
                    </div>
                    <div className="stock-info">
                        <StockContainer match={ match } history={history} />   
                    </div>
                    <div className="news">
                    </div>
                </div>
            </div>
        )
    }

    return match.url === "/" ? showPortfolio() : showStock()
}

export default Dashboard;