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
        const { stock } = this.props;

        if (!stock) {
            return "stock component";
        } else {
            const {
                longName, 
                symbol, 
                regularMarketDayRange, 
                regularMarketPrice,
                data
            } = stock;
            return (
                <div className="dashboard-main">
                    <div className="dashboard-inner">
                        <div className="stock-info1">
                            <div className="dashboard-port-news">
                                <div className="stock-info2">
                                    <h3>{longName}</h3>
                                    <br/>
                                    {regularMarketPrice}
                                    <br/>
                                    {regularMarketDayRange}
                                </div>
                                <div className="stock-info-chart">
                                    <StockChart ticker={ symbol } data={ data } />
                                </div>
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