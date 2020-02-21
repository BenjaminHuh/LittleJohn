import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import Minichart from '../chart/minichart';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        // this.ticker = { 
        //     color: "black",
        //     change: 0 }
    }
    update() {
        let prevPrice = this.props.stock.info.regularMarketPreviousClose;
        let newPrice = this.props.stock.info.regularMarketPrice;
        let change = (newPrice - prevPrice) / prevPrice * 100;
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

    componentDidMount() {
        this.props.getPortfolioItem(this.props.id).then(() => {
            this.update();
            // let prevPrice = this.props.stock.info.regularMarketPreviousClose;
            // let newPrice = this.props.stock.info.regularMarketPrice;
            // let change = (newPrice - prevPrice) / prevPrice * 100;
            // if (change > 0) {
            //     this.ticker = { 
            //         color: "price-green",
            //         change: change
            //      }
            // } else {
            //     this.ticker = { 
            //         color: "price-red",
            //         change: change
            //     }                
            // }
        })
        this.interval = setInterval(() => this.props.getPortfolioItem(this.props.id), 63000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }        

    componentDidUpdate(prevState) {
        if (prevState.stock.info !== undefined && this.props.stock.info !== undefined) {
            this.update();
            // let prevPrice = this.props.stock.info.regularMarketPreviousClose;
            // let newPrice = this.props.stock.info.regularMarketPrice;
            // let change = (newPrice - prevPrice) / prevPrice * 100;
            // if (change > 0) {
            //     this.ticker = { 
            //         color: "price-green",
            //         change: change
            //      }
            // } else {
            //     this.ticker = { 
            //         color: "price-red",
            //         change: change
            //         }
            // }
        }
    }    

    render() {

        if (!this.props.stock.info || !this.ticker) {
            return (
                <div className='port-item-link'></div>
            )
        } 
        else {
            let ticker_color = this.ticker.color;
            let ticker_change = this.ticker.change;
            const { symbol, regularMarketPrice } = this.props.stock.info;
            return (
                <Link className='port-item-link' to={`/stocks/${symbol}`}>
                    <div className="port-item-symbol">
                        <div></div>
                        <div className={ticker_color}>
                            {symbol}
                        </div>
                    </div>

                    <div className="port-item-chart">
                        <Minichart regularMarketPreviousClose={ this.props.stock.info.regularMarketPreviousClose } change={ticker_change} ticker={this.props.stock.info.symbol} data={this.props.stock.info.data} className="mini-chart"/>
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