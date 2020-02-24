import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';
import WatchlistItemContainer from './watchlist_item_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: {}
        }
    }

    componentDidMount() {
        // this.props.clearPortfolioList(this.props.portfolio);
        // this.props.clearWatchlist(this.props.watchlist);
        this.props.getPortfolio();
        this.props.getWatchlist();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (Object.keys(prevProps.portfolio).length !== Object.keys(this.props.portfolio).length) {
    //         this.setState({portfolio: this.props.portfolio});
    //     }
    // }

    render() {
        const { portfolio, watchlist } = this.props;
        // debugger

        if (Object.keys(portfolio) === 0) {
            return "";
        } else {
            
            return (
                <div>
                    <br/>
                    <div className="port-header">Portfolio</div>
                    <br/>
                    {
                        Object.keys(portfolio).map((id, i) => {               
                            return (
                                <div key={i}>
                                    <PortfolioItemContainer 
                                        stock={portfolio[id]} 
                                        id={id}
                                        key={i}
                                    />
                                </div>
                            )
                        })
                    }
                    <br/>
                    <div className="port-header">Watchlist</div>
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