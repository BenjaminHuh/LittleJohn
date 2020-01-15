import React from 'react';
import { Link } from 'react-router-dom'

class WatchlistItem extends React.Component {
    componentDidMount() {
        this.props.getWatchlistItem(this.props.id)
        // this.interval = setInterval(() => this.props.getWatchlistItem(this.props.id), 5000);

    }

    render() {

        if (!this.props.stock.info) {
            return null;
        } 
        else {
            const { symbol, regularMarketPrice } = this.props.stock.info;
            return (
                <div>
                    <br/>
                    <div>{<Link to={`/stocks/${symbol}`}>{symbol}</Link>}</div>
                    <div>{regularMarketPrice}</div>
                </div>
            )
        }
    }
}

export default WatchlistItem