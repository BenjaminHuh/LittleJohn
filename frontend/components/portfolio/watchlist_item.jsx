import React from 'react';
import { Link } from 'react-router-dom'

class WatchlistItem extends React.Component {
    componentDidMount() {
        this.props.getWatchlistItem(this.props.id)
        this.interval = setInterval(() => this.props.getWatchlistItem(this.props.id), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }        


    render() {
        
        if (!this.props.stock.info) {
            return null;
        } 
        else {
            const { symbol, regularMarketPrice } = this.props.stock.info;
            return (
                <Link className="port-item-link" to={`/stocks/${symbol}`}>
                    <div className="port-item-symbol"> 
                        <div></div>
                        <div>{symbol}</div>
                        <div></div>
                    </div>
                    <div className="port-item-chart"></div>
                    <div className="port-item-price">
                        <div>${regularMarketPrice}</div>
                    </div>
                    
                </Link> 
            )
        }
    }
}

export default WatchlistItem