import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    render() {
        const symbol = this.props.match.params.ticker;
        return (
            <div>
                <div className="stock-order">
                    <div className="order-symbol">Buy {symbol.toUpperCase()}</div>
                    <div className="stock-2">
                    <form>
                        <input className="howmany" type="number" placeholder="0"/><br/>
                        <div className="cost">$0.00</div>
                        <button className="buy">Buy</button>
                    </form>
                    </div>
                    <div className="stock-3">${`1.60`} Buying Power Available</div>
                    <div className="stock-4">
                    </div>
                    <button className="addToWatchlist">Add to Watchlist</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Stockorder);