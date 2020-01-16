import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.ticker = { 
            color: "black",
            change: 0 }
    }

    componentDidMount() {
        this.props.clearStockItem()
        this.props.getPortfolioItem(this.props.id)
        this.interval = setInterval(() => this.props.getPortfolioItem(this.props.id), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }        

    componentDidUpdate(prevState) {
        if (prevState.stock.info !== undefined && this.props.stock.info !== undefined) {
            let prevPrice = prevState.stock.info.regularMarketPrice;
            let newPrice = this.props.stock.info.regularMarketPrice;
            let change = (prevPrice - newPrice) / prevPrice * 100;
            if (change > 0) {
                this.ticker = { 
                    color: "price-green",
                    change: change
                 }
            } else {
                this.ticker = { 
                    color: "price-red",
                    change: change
                    }
            }
        }
    }    

    render() {
        if (!this.props.stock.info) {
            return null;
        } 
        else {
            let ticker_color = this.ticker.color;
            let ticker_change = this.ticker.change;
            const { symbol, regularMarketPrice } = this.props.stock.info;
            return (
                <Link className="port-item-link" to={`/stocks/${symbol}`}>
                    <div className="port-item-symbol">
                        <div></div>
                        <div className={ticker_color}>
                            {symbol}
                        </div>
                        <div></div>
                    </div>

                    <div className="port-item-chart">
                    </div>

                    <div className="port-item-price">
                        <div className={ticker_color}>${regularMarketPrice.toFixed(2)}</div>
                        <div className={ticker_color}>{(ticker_change).toFixed(2)}%</div>                        
                    </div>
                </Link>

            
            )
        }
    }
}

export default PortfolioItem