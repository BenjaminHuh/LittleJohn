import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componenetDidMount() {
        this.setState(() => ({ stock: this.props.getStock(this.props.match.params.ticker) }));
        // this.props.history.push(`/stocks/${this.props.match.params.ticker}`)
    }
    
    render() {
        // debugger
        const { stock, ticker } = this.props;

        const {
            longName, 
            symbol, 
            regularMarketDayRange, 
            regularMarketPrice
        } = stock;

        return (
            <div className="stock-info1">
                <h1>
                    {longName}
                    <br/>
                    {regularMarketPrice}
                    <br/>
                    {regularMarketDayRange}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </h1>
            </div>
        );
    }
}



export default Stock;