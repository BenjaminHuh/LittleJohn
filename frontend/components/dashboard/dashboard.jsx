import React from 'react';
import StockContainer from '../stock/stock_container';
import PortfolioContainer from '../portfolio/portfolio_container';
import NewsContainer from '../news/news_container';
import StockorderContainer from '../stockorder/stockorder_container';
// import Chart from '../chart/chart';
import SummaryChart from '../chart/summary_chart'
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard-main">
                <div className="dashboard-inner">
                    <div className="dashboard-port-news">
                        <div className="portfolio-summary">
                            <SummaryChart/>
                            <ul className="options">
                                <li id="all" className="noption">All</li>
                                <li className="option">1D</li>
                                <li className="noption">1W</li>
                                <li className="noption">1M</li>
                                <li className="noption">3M</li>
                                <li className="noption">1Y</li>
                                <li className="noption">5Y</li>
                            </ul>
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
}

export default Dashboard;
// const Dashboard = ({ match, currentUser }) => {


//     const showPortfolio = () => {
//         return (
//             <div className="dashboard-main">
//                 <div className="dashboard-inner">
//                     <div className="dashboard-port-news">
//                         <div className="portfolio-summary">
//                             <div>
//                             </div>
//                         </div>
//                         <div className="news">
//                             <NewsContainer/>
//                         </div>
//                     </div>     
//                     <div className="portfolio-watchlist">
//                         <PortfolioContainer className="portfolio-watchlist-inner"/>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return match.url === "/" ? showPortfolio() : showStock()
// }

// export default withRouter(Dashboard);