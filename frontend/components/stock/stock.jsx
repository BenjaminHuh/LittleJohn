import React from 'react';
import NewsContainer from '../news/news_container';
import StockorderContainer from '../stockorder/stockorder_container';
import StockChart from '../chart/stock_chart';
import Company from './company';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            longName: 'loading',
            regularMarketPrice: 'loading',
            regularMarketDayRange: 'loading'
         }
        
    }

    componentDidMount() {
        // this.props.clearStock()
        this.props.getStock(this.props.match.params.ticker)   
        this.interval = setInterval(() => this.props.getStock(this.props.match.params.ticker), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }        
    
    componentDidUpdate(prevProps) {
        const { match: { params: { ticker } } } = this.props
        if (prevProps.match.params.ticker !== ticker){
        this.props.getStock(this.props.match.params.ticker)
        }
    }

    
    render() {
        const { stock, currentUser } = this.props;
        // debugger
        if (stock === undefined || !currentUser || !stock.company) {
            return "stock component";
        } else {
            const {
                longName, 
                symbol, 
                regularMarketChangePercent,
                regularMarketChange,
                regularMarketPrice,
                postMarketPrice,
                regularMarketPreviousClose,
                regularMarketVolume,
                trailingAnnualDividendRate,
                marketCap,
                priceToBook,
                data,
                company,
                id,
                num_stocks
            } = stock;
            
            document.getElementById("title").innerHTML = `${symbol} - $${regularMarketPrice.toFixed(2)} | LittleJohn`
            let dSign = "";
            let stroke = "";
            if (regularMarketChange < 0) {
                dSign = "-$"; 
                stroke = "#FB6E6E"
            } else {
                dSign = "+$"; 
                stroke = "#72ca9d"
            };

            let currChange = `${dSign}${Math.abs(regularMarketChange).toFixed(2)} (${dSign}${Math.abs(regularMarketChangePercent).toFixed(2)}%) Today`
            
            // let currPrice = postMarketPrice ? postMarketPrice.toFixed(2) : regularMarketPrice.toFixed(2)
            let currPrice = regularMarketPrice.toFixed(2);
            return (
                <div className="dashboard-main">
                    <div className="dashboard-inner">
                        {/* <div className="stock-info1"> */}
                            <div className="dashboard-port-news">
                                <div className="stock-info2">
                                    <div id="longName">{longName}</div>
                                    <div id="currPrice" className="odometer">{"$" + currPrice}</div>
                                    <div id="currChange">{currChange}</div>
                                    <br/>
                                </div>
                                <div className="stock-info-chart">
                                    <StockChart ticker={ symbol } 
                                        data={ data } 
                                        stroke={ stroke } 
                                        regularMarketPreviousClose={ regularMarketPreviousClose }
                                        currPrice={ currPrice }
                                        currChange={ currChange }
                                        />
                                </div>
                                <ul className="options">
                                    <li id="one_d" className="option">1D</li>
                                    <li className="noption">1W</li>
                                    <li className="noption">1M</li>
                                    <li className="noption">3M</li>
                                    <li className="noption">1Y</li>
                                    <li className="noption">5Y</li>
                                    <li className="noption">ALL</li>
                                </ul>
                                <div className="company">

                                </div>
                                    <Company 
                                        marketVolume = { regularMarketVolume }
                                        dividendRate = { trailingAnnualDividendRate }
                                        marketCap = { marketCap }
                                        priceToBook = { priceToBook }
                                        company = { company }
                                    />
                                <div className="news">
                                    <NewsContainer stock={ stock }/>
                                </div>
                            </div>

                        {/* </div> */}
                    </div>
                    <div>
                        <StockorderContainer currPrice = {currPrice} 
                                            num_stocks = { num_stocks } 
                                            stockId = { id } 
                                            currentUser = { currentUser } 
                                            ticker = { symbol } 
                        />
                    </div>
                </div>
            )
        }
    }
}



export default Stock;