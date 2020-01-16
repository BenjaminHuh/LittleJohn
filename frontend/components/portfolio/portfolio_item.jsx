import React from 'react';
import { Link } from 'react-router-dom'

class PortfolioItem extends React.Component {

    componentDidMount() {
        this.props.getPortfolioItem(this.props.id).then(() => {
            let total = this.props.info.regularMarketPrice * this.props.stock.num_stocks;
            this.setState({ total: { [this.props.id]: total }})
        })
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
                    <div>{(regularMarketPrice * this.props.stock.num_stocks).toFixed(2)}</div>
                    <br/>
                </div>
            )
        }
    }
}

export default PortfolioItem