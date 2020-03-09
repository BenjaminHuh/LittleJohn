import React from 'react';
import StockContainer from '../stock/stock_container';
import PortfolioContainer from '../portfolio/portfolio_container';
import NewsContainer from '../news/news_container';
import StockorderContainer from '../stockorder/stockorder_container';
import SummaryChart from '../chart/summary_chart'
import { withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { currentUser, getSummary, clearSummary } = this.props;
        clearSummary()
        getSummary(currentUser);
    }

    render() {
        return (
            <div className="dashboard-main">
                <NavbarContainer getSummary={ this.props.getSummary } />

                <div className="dashboard-inner">
                    <div className="dashboard-port-news">
                        <div className="portfolio-summary">
                            <SummaryChart summary={ this.props.summary }/>
                            {/* <ul className="options">
                                <li className="option">1D</li>
                                <li className="noption">1W</li>
                                <li className="noption">1M</li>
                                <li className="noption">3M</li>
                                <li className="noption">1Y</li>
                                <li className="noption">5Y</li>
                                <li id="all" className="noption">All</li>
                            </ul> */}
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
