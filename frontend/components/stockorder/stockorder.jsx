import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cost: 0, 
                    buyingPower: this.props.currentUser.balance,
                    ticker: this.props.ticker,
                    num_stocks: 0
                    }
        this.updateCost = this.updateCost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToWatchlist = this.addToWatchlist.bind(this);
        this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
    }


    
    updateCost(val) {   
        let currPrice = parseFloat(document.getElementById("currPrice").innerHTML.slice(1));
        this.setState({ cost: (parseFloat(val === "" ? 0 : val) * currPrice)}, () => {
            this.setState({ buyingPower: this.props.currentUser.balance - this.state.cost });
        });
    }

    handleUpdate(e) {
        // debugger
        this.setState({num_stocks: e.target.value})
        this.updateCost(e.target.value);

    }

    handleSubmit(e) {
        e.preventDefault();
        let cost = this.state.cost;
        let num_stocks = this.state.num_stocks;
        const { currentUser, stockId } = this.props;

        if (num_stocks <= 0) {
            alert("Please select valid amount of stocks to buy");
        } else if (cost > this.state.buyingPower) {
            alert("Not Enough Buying Power");
        } else {
            this.props.submitOrder({ user_id: currentUser.id, num_stocks: this.state.num_stocks, stock_id: stockId })
            alert(`Buy ${num_stocks} ${this.props.ticker} stocks for $${cost}!`)
        }
    }

    addToWatchlist() {
        const { currentUser, stockId } = this.props;
        currentUser.watchlist.push(`${stockId}`);
        this.props.updateUser(currentUser);
        
        alert("Added to Watchlist")
    }

    removeFromWatchlist() {
        const { currentUser, stockId } = this.props;

        let idx = currentUser.watchlist.indexOf(`${stockId}`);

        currentUser.watchlist.splice(idx, 1);

        if (currentUser.watchlist.length === 0) {
            currentUser.watchlist.push("0");
        }
        this.props.updateUser(currentUser).then(() => this.props.getWatchlist(currentUser.id));    
        alert("Removed from Watchlist")
    }

    componentDidMount() {
        // const { currentUser, stockId } = this.props;
        // this.props.getPortfolioItem(currentUser, stockId);
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.ticker !== this.props.ticker) {
            this.updateCost(document.getElementById("howmany").value);
        }
    }

    render() {
        const { currentUser, stockId, num_stocks } = this.props;
        const symbol = this.props.match.params.ticker;
        // debugger
        let watching = this.props.currentUser.watchlist.includes(`${this.props.stockId}`);
        
        // if (!portfolioItem[stockId]) {
        //     return "";
        // } else {
        //     let num_stocks = portfolioItem[stockId].num_stocks;
        //     if (!num_stocks) {
        //         return "";
        //     } else {
        return (
            <div>
                <div className="stock-order">
                    <div className="order-symbol">Buy {symbol.toUpperCase()}</div>
                    <div className="stock-2">
                    <form>
                        <input id="howmany" className="howmany" onChange={this.handleUpdate} type="number" placeholder="0"/><br/>
                        <div className="cost">${this.state.cost.toFixed(2)}</div>
                        <button className="buy" onClick={this.handleSubmit}>Buy</button>
                    </form>
                    </div>
                    <div className="stock-3">{this.state.buyingPower > 0 ? `$${this.state.buyingPower.toFixed(2)} Buying Power Available` : `Not Enough Buying Power`}</div>
                    <div className="stock-4">
                        {num_stocks} Shares
                    </div>
                    <button className="addToWatchlist" onClick={watching ? this.removeFromWatchlist : this.addToWatchlist}>{watching ? "Remove from Watchlist" : "Add to Watchlist"}</button>
                </div>
            </div>
        )  
        //     }
        // }  
    }
}

export default withRouter(Stockorder);