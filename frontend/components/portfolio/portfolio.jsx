import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';
import WatchlistItemContainer from './watchlist_item_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // portfolio: {},
            // watchlist: {},
            loading: true
        }
    }

    componentDidMount() {
        // this.setState({loading: true})
        // this.props.clearPortfolioList(this.props.portfolio);
        // this.props.clearWatchlist(this.props.watchlist);

        // this.props.getPortfolio().then(() => this.setState({loading: false}));        
        // this.setState({loading: true}, () => this.props.getPortfolio()).then(() => this.setState({loading: false}));

        this.props.clearPortfolioList();
        this.props.getPortfolio(this.props.currentUser.id).then(() => this.setState({loading: false}));
        this.props.clearWatchlist();
        this.props.getWatchlist(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (Object.keys(prevProps.portfolio).length !== Object.keys(this.props.portfolio).length) {
        //     this.setState({loading: true});
        // }
        if (prevProps.currentUser.watchlist.length !== this.props.currentUser.watchlist.length) {
            this.props.getWatchlist(this.props.currentUser.id)
        }
    }

    componenetWillUnmount() {
        
    }

    render() {
        document.getElementById("title").innerHTML = "LittleJohn";
        const { portfolio, watchlist } = this.props;
        // debugger
        if (this.state.loading) {
        // if (this.props.portfolioLoading || this.props.watchlistLoading) {
            return (
                <img className="loading" src={window.loading} />
            )
        } else {
            
            return (
                <div>
                    <div className="cash-wrapper">
                        <div className="cash-header">Cash</div>
                        <div className="cash-balance">
                            ${this.props.currentUser.balance.toFixed(2)}
                        </div>
                    </div>
                    <br/>
                    <div className="port-header">Portfolio</div>
                    <br/>
                    <div>
                        {   Object.keys(portfolio).length === 0 ?
                            <div className="empty">
                                You currently do not own any shares. Search and add Stocks to your Portfolio. 
                            </div> :
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
                    </div>
                    <br/>
                    <div className="port-header">Watchlist</div>
                    <br/>
                    <div>
                        {
                            Object.keys(watchlist).length === 0 ?
                            <div className="empty">Watchlist is empty. Search and add Stocks to your Watchlist</div>:
                            Object.keys(watchlist).map((id, j) => {
                                return (
                                    <div key={j}>
                                        <WatchlistItemContainer
                                            stock={watchlist[id]}
                                            id={id}
                                            key={j}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )               
        }
    }
}
export default Portfolio;