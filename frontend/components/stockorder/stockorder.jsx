import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cost: 0, 
                    buyingPower: this.props.currentUser.balance,
                    ticker: this.props.ticker,
                    num_stocks: 0,
                    position: "buy",
                    }
        this.updateCost = this.updateCost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addToWatchlist = this.addToWatchlist.bind(this);
        this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
    }


    updatePosition(position) {
        // debugger
        this.setState({ position: position.target.id }, () => 
            this.updateCost(this.state.num_stocks)
        )
    }

    updateCost(val) {   
        let currPrice = this.props.currPrice;
        // let currPrice = parseFloat(document.getElementById("currPrice").innerHTML.slice(1));
        this.setState({ cost: (parseFloat(val === "" ? 0 : val) * currPrice)}, () => {
            this.state.position === "buy" ?
            this.setState({ buyingPower: this.props.currentUser.balance - this.state.cost }):
            this.setState({ buyingPower: this.props.currentUser.balance + this.state.cost });
        });
    }

    handleUpdate(e) {
        // debugger
        this.setState({num_stocks: e.target.value})
        this.updateCost(e.target.value);

    }

    handleSubmit(e) {
        e.preventDefault();
        const { position } = this.state;
        let cost = this.state.cost;
        const { num_stocks } = this.state;
        const { num_stocks: owned_stocks } = this.props;
        // let num_stocks = (position === "buy" ? this.state.num_stocks : -1 * this.state.num_stocks);
        const { currentUser, stockId } = this.props;

        if (position === "buy") {
            if (num_stocks <= 0) {
                alert("Please select valid amount of shares to buy");
            } else if (cost > currentUser.balance) {
                alert("Not Enough Buying Power");
            } else {
                currentUser.balance -= cost;
                this.props.updateUser(currentUser)
                    .then(this.props.submitOrder({ user_id: currentUser.id, num_stocks, stock_id: stockId }))
                    .then(this.setState({num_stocks: 0}))
                document.getElementById("howmany").value = 0;
                alert(`Successfully Added ${num_stocks} ${this.props.ticker} Shares for $${cost.toFixed(2)}`);
            }
        } else {
            if (num_stocks <= 0) {
                alert("Please select valid amount of shares to sell")
            } else if (num_stocks > owned_stocks) {
                alert("Not enough shares");
            } else {
                currentUser.balance += cost;
                this.props.updateUser(currentUser)
                    .then(this.props.submitOrder({ user_id: currentUser.id, num_stocks: -1 * num_stocks, stock_id: stockId }))
                    .then(this.setState({num_stocks: 0}))
                document.getElementById("howmany").value = 0;
                alert(`Successfully Sold ${num_stocks} ${this.props.ticker} Shares for $${(cost).toFixed(2)}`);
            }
        }
        // if (position === "buy" && num_stocks <= 0) {
        //     alert("Please select valid amount of stocks to buy");
        // } else if (this.state.position === "buy" && cost > this.state.buyingPower) {
        //     alert("Not Enough Buying Power");
        // } else {
            
        //     this.props.updateUser(currentUser);
        //     this.props.submitOrder({ user_id: currentUser.id, num_stocks, stock_id: stockId })
        //     alert(`Buy ${num_stocks} ${this.props.ticker} stocks for $${cost}!`)
        // }
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
        const { currentUser, stockId, num_stocks, currPrice } = this.props;
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
        
        const { position } = this.state

        return (
            <div>
                <div className="stock-order">
                    <div className="order-symbol">
                        <a id={position === "buy" ? "buy-selected" : "buy"} onClick={this.updatePosition}>Buy {symbol.toUpperCase()}</a> 
                        <a id={position === "sell" ? "sell-selected" : "sell"} onClick={this.updatePosition}>Sell {symbol.toUpperCase()}</a>
                    </div>
                    
                    <div className="stock-2">
                    <form>
                        <input id="howmany" className={position === "buy" ? "howmany" : "howmany-sell"} onChange={this.handleUpdate} type="number" placeholder="0" min="0"/><br/>
                        <button className={position === "buy" ? "buy" : "sell"} onClick={this.handleSubmit}>{position === "buy" ? "Buy" : "Sell"}</button>
                        <div id={this.state.cost !== 0 ? "cost" : "no-cost"} className={position === "buy" ? "cost" : "cost-sell"}>Estimated {position === "buy" && this.state.cost ? "Cost " : "Value "}${this.state.cost.toFixed(2)}</div>
                    </form>
                    </div>
                    <div className="stock-3">{this.state.buyingPower > 0 ? `$${this.state.buyingPower.toFixed(2)} Buying Power Available` : `Not Enough Buying Power`}</div>
                    <div id="shares" className="stock-4">
                        <div>
                            {num_stocks} Shares
                        </div>
                        <div>${(num_stocks * currPrice).toFixed(2)}</div>
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


            // <div>
            //     <div className="stock-order">
            //         <div className="order-symbol">Buy {symbol.toUpperCase()}</div>
            //         <div className="stock-2">
            //         <form>
            //             <input id="howmany" className="howmany" onChange={this.handleUpdate} type="number" placeholder="0"/><br/>
            //             <div className="cost">${this.state.cost.toFixed(2)}</div>
            //             <button className="buy" onClick={this.handleSubmit}>Buy</button>
            //         </form>
            //         </div>
            //         <div className="stock-3">{this.state.buyingPower > 0 ? `$${this.state.buyingPower.toFixed(2)} Buying Power Available` : `Not Enough Buying Power`}</div>
            //         <div className="stock-4">
            //             {num_stocks} Shares
            //         </div>
            //         <button className="addToWatchlist" onClick={watching ? this.removeFromWatchlist : this.addToWatchlist}>{watching ? "Remove from Watchlist" : "Add to Watchlist"}</button>
            //     </div>
            // </div>