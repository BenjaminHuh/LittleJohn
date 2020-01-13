import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
    }

    // componenetDidMount() {
    //     this.setState({ ticker: this.props.ticker });
    // }
    
    render() {
        const {
            longName, 
            symbol, 
            regularMarketDayRange, 
            regularMarketPrice
        } = this.props.stock;
        return (
            <div>
                
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