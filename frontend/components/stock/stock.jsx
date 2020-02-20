import React from 'react';
import NewsContainer from '../news/news_container';
import StockorderContainer from '../stockorder/stockorder_container';
import StockChart from '../chart/stock_chart';

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
        this.props.getStock(this.props.match.params.ticker)   
        this.interval = setInterval(() => this.props.getStock(this.props.match.params.ticker), 3000);
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
        const { stock } = this.props;

        if (!stock) {
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
                data
            } = stock;
            
            let dSign = "";
            let stroke = "";
            if (regularMarketChange < 0) {
                dSign = "-$"; 
                stroke = "#FB6E6E"
            } else {
                dSign = "+$"; 
                stroke = "#72ca9d"
            };
            

            return (
                <div className="dashboard-main">
                    <div className="dashboard-inner">
                        <div className="stock-info1">
                            <div className="dashboard-port-news">
                                <div className="stock-info2">
                                    <h2>{longName}</h2>
                                    <br/>
                                    <h2>{postMarketPrice ? "$" + postMarketPrice.toFixed(2) : "$" + regularMarketPrice.toFixed(2)}</h2>
                                    <div>{dSign}{Math.abs(regularMarketChange).toFixed(2)} ({dSign}{Math.abs(regularMarketChangePercent).toFixed(2)}%) Today</div>
                                    <br/>
                                </div>
                                <div className="stock-info-chart">
                                    <StockChart ticker={ symbol } data={ data } stroke={ stroke } regularMarketPreviousClose={ regularMarketPreviousClose }/>
                                </div>
                                <ul className="options">
                                    <li>D</li>
                                    <li>M</li>
                                    <li>Y</li>
                                    <li>5Y</li>
                                </ul>
                                <div className="news">
                                    <NewsContainer />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <StockorderContainer/>
                    </div>
                </div>
            )
        }
    }
}



export default Stock;