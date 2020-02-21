import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cost: 0, 
                    buyingPower: this.props.currentUser.balance }
        this.updateCost = this.updateCost.bind(this);
    }

    updateCost(e) {
        let currPrice = parseFloat(document.getElementById("currPrice").innerHTML.slice(1));
        // debugger
        let val = e.target.value;    
        this.setState({ cost: (parseFloat(val === "" ? 0 : val) * currPrice)}, () => {
            this.setState({ buyingPower: this.props.currentUser.balance - this.state.cost });
        });
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
                        <input className="howmany" onChange={this.updateCost} type="number" placeholder="0"/><br/>
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