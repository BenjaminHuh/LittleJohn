import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';
import WatchlistItemContainer from './watchlist_item_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: {},
            watchlist: {},
            loading: false
        }
    }

    componentDidMount() {
        // this.setState({loading: true})
        // this.props.clearPortfolioList(this.props.portfolio);
        // this.props.clearWatchlist(this.props.watchlist);

        // this.props.getPortfolio().then(() => this.setState({loading: false}));        
        // this.setState({loading: true}, () => this.props.getPortfolio()).then(() => this.setState({loading: false}));
        this.props.getPortfolio();
        this.props.getWatchlist();
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (Object.keys(prevProps.portfolio).length !== Object.keys(this.props.portfolio).length) {
    //         this.setState({loading: true});
    //     }
    // }

    render() {
        const { portfolio, watchlist } = this.props;

        if (this.state.loading === true) {
            return "loading..";
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