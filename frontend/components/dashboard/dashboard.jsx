import React from 'react';
import StockContainer from '../stock/stock_container';
import PortfolioContainer from '../portfolio/portfolio_container';
import NewsContainer from '../news/news_container';
import StockorderContainer from '../stockorder/stockorder_container';
import Chart from '../chart/chart';
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
                            <div>
                            </div>
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