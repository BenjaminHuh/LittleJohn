import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';
import WatchlistItemContainer from './watchlist_item_container';

class Portfolio extends React.Component {
    componentDidMount() {
        this.props.getPortfolio();
        this.props.getWatchlist();
    }
    render() {
        const { portfolio, watchlist } = this.props;
        if (Object.keys(portfolio) === 0) {
            return null;
        } else {
            return (

                <div>
                    <br/>
                    Portfolio
                    <br/>
                    {
                        Object.keys(portfolio).map((id, i) => {               
                            return (
                                <div key={i}>
                                    <PortfolioItemContainer 
                                        item={portfolio[id]} 
                                        id={id}
                                        key={i}
                                    />
                                </div>
                            )
                        })
                    }
                    <br/>
                    Watchlist
                    <br/>
                    {
                        Object.keys(watchlist).map((id, j) => {
                            return (
                                <div key={j}>
                                    <WatchlistItemContainer
                                        item={watchlist[id]}
                                        id={id}
                                        key={j}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            )        
        
        }
    }
}
export default Portfolio;