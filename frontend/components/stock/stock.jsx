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
        // this.interval = setInterval(() => this.props.getStock(this.props.match.params.ticker), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
                    </h1>
                </div>
            )
        }
    }
}



export default Stock;