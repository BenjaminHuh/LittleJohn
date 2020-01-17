import React from 'react';
import { withRouter } from 'react-router-dom';

class Stockorder extends React.Component {
    render() {
        const symbol = this.props.match.params.ticker;
        return (
            <div>
                <div className="stock-order">
                    <div className="order-symbol">Buy {symbol.toUpperCase()}</div>
                    <div className="stock-2"></div>
                    <div className="stock-3"></div>
                    <div className="stock-4"></div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Stockorder);