import React from 'react';
import { Link } from 'react-router-dom'
import Minichart from '../chart/minichart';

class WatchlistItem extends React.Component {
    constructor(props) {
        super(props);
        let prevPrice = this.props.stock.regularMarketPreviousClose;
        let newPrice = this.props.stock.regularMarketPrice;
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
        // this.ticker = {
        //     color: "black",
        //     change: 0 
        // }
        this.state = {
            stock: this.props.stock
        }
    }



    update() {
        let prevPrice = this.props.stock.regularMarketPreviousClose;
        let newPrice = this.props.stock.regularMarketPrice;
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
        this.update();
        // this.props.getWatchlistItem(this.props.id).then(this.update());
        // this.interval = setInterval(() => this.props.getWatchlistItem(this.props.id), 60000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }        

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.stock !== this.props.stock) {
            this.setState({stock: this.props.stock});
            this.update();
        }

        // if (prevState.stock !== undefined && this.props.stock !== undefined) {
        //     let prevPrice = this.props.stock.regularMarketPreviousClose;
        //     let newPrice = this.props.stock.regularMarketPrice;
        //     let change = (newPrice - prevPrice) / prevPrice * 100;
        //     if (change > 0) {
        //         this.ticker = { 
        //             color: "price-green",
        //             change: change
        //          }
        //     } else {
        //         this.ticker = { 
        //             color: "price-red",
        //             change: change
        //             }
        //     }
    }    

    render() {
        if (!this.props.stock || !this.ticker) {
            return (
                <div className='port-item-link'></div>
            )
        } 
        else {
            let ticker_color = this.ticker.color;
            let ticker_change = this.ticker.change;
            const { symbol, regularMarketPrice } = this.props.stock;
            return (
                <Link className="port-item-link" to={`/stocks/${symbol}`}>
                {/* <Link className="port-item-link" to={{ pathname: `/stocks/${symbol}`, state: {stock: this.props.stock}}}> */}
                    <div className="port-item-symbol"> 
                        <div></div>
                        <div className={ticker_color}>{symbol}</div>
                        <div></div>
                    </div>
                    <div className="port-item-chart">
                        <Minichart regularMarketPreviousClose={ this.props.stock.regularMarketPreviousClose } change={ticker_change} ticker={this.props.stock.symbol} data={this.props.stock.data} className="mini-chart"/>
                    </div>
                    <div className="port-item-price">
                        <div className={ticker_color}>${regularMarketPrice.toFixed(2)}</div>
                        <div className={ticker_color} id='ticker_change'>{(ticker_change).toFixed(2)}%</div>
                    </div>
                    
                </Link> 
            )
        }
    }
}

export default WatchlistItem