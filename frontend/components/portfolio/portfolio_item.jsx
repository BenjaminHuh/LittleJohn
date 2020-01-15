import React from 'react';
import { Link } from 'react-router-dom'

class PortfolioItem extends React.Component {

    componentDidMount() {
        this.props.getPortfolioItem(this.props.id)
    }

    render() {

        if (!this.props.stock.info) {
            return null;
        } 
        else {
            const { symbol, regularMarketPrice } = this.props.stock.info;
            return (
                <div>
                    <div>{<Link to={`/stocks/${symbol}`}>{symbol}</Link>}</div> 
                    <div>{regularMarketPrice}</div>
                    <div>{this.props.stock.num_stocks}</div>
                    <br/>
                </div>
            )
        }
    }
}

export default PortfolioItem