import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cost: 0, 
                    buyingPower: this.props.currentUser.balance,
                    ticker: this.props.ticker
                    }
        this.updateCost = this.updateCost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    updateCost(val) {   
        let currPrice = parseFloat(document.getElementById("currPrice").innerHTML.slice(1));
        this.setState({ cost: (parseFloat(val === "" ? 0 : val) * currPrice)}, () => {
            this.setState({ buyingPower: this.props.currentUser.balance - this.state.cost });
        });
    }

    handleUpdate(e) {
        // debugger
        this.updateCost(e.target.value);

    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if (prevProps.ticker !== this.props.ticker) {
            this.updateCost(document.getElementById("howmany").value);
        }
    }

    render() {
        const { currentUser } = this.props;
        const symbol = this.props.match.params.ticker;

        return (
            <div>
                <div className="stock-order">
                    <div className="order-symbol">Buy {symbol.toUpperCase()}</div>
                    <div className="stock-2">
                    <form>
                        <input id="howmany" className="howmany" onChange={this.handleUpdate} type="number" placeholder="0"/><br/>
                        <div className="cost">${this.state.cost.toFixed(2)}</div>
                        <button className="buy">Buy</button>
                    </form>
                    </div>
                    <div className="stock-3">{this.state.buyingPower > 0 ? `$${this.state.buyingPower.toFixed(2)} Buying Power Available` : `Not Enough Buying Power`}</div>
                    <div className="stock-4">
                    </div>
                    <button className="addToWatchlist">Add to Watchlist</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Stockorder);