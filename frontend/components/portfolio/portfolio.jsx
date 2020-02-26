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

    render() {
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
                                        stock={watchlist[id]}
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