import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StockContainer from '../stock/stock_container';
import PortfolioContainer from '../portfolio/portfolio_container';
import NewsContainer from '../news/news_container';
import SummaryContainer from '../summary/summary_container';
import StockorderContainer from '../stockorder/stockorder_container';
import { withRouter } from 'react-router-dom';
const Dashboard = ({ match, currentUser }) => {


    const showPortfolio = () => {
        return (
            <div className="dashboard-main">
                <NavbarContainer match={ match } history={history} />
                <div className="dashboard-inner">
                    <div className="dashboard-port-news">
                        <div className="portfolio-summary">
                            portfolio summary goes here
                            <SummaryContainer/>
                        </div>
                        <div className="news">
                            <NewsContainer/>
                        </div>
                    </div>     
                    <div className="portfolio-watchlist">
                        <PortfolioContainer className="portfolio-watchlist-inner"/>
                    </div>
                </div>
            </div>
        )
    }

    // const showStock = () => {
    //     debugger
    //     return (
    //         <div>
    //             <NavbarContainer match={ match } history={history} />
    //             <div className="dashboard-inner">
    //                 <div className="portfolio-watchlist">
    //                     <StockorderContainer/>
    //                 </div>
    //                 <div className="stock-info">
    //                     <StockContainer match={ match } history={history} />   
    //                 </div>
    //                 <div className="news">
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    return match.url === "/" ? showPortfolio() : showStock()
}

export default withRouter(Dashboard);