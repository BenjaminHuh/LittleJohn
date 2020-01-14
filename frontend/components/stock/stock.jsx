import React from 'react';

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
    }
    
    render() {

        const { stock } = this.props;
        // const ticker = this.props.match.params.ticker;

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