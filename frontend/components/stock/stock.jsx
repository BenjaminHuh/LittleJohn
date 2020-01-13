import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componenetDidMount() {
        this.props.getStock(this.props.ticker);
    }
    
    render() {

        const {
            longName, 
            symbol, 
            regularMarketDayRange, 
            regularMarketPrice
        } = this.props.stock;

        return (
            <div className="stock-info1">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>
                    {symbol}
                    <br/>
                    {longName}
                    <br/>
                    {regularMarketPrice}
                    <br/>
                    {regularMarketDayRange}
                </h1>
            </div>
        );
    }
}



export default Stock;