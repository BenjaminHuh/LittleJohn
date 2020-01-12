import React from 'react';

class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.stock;
    }

    componenetDidMount() {
        this.props.getStock(this.props.stock.symbol);
    }
    
    render() {
        return (
            <div>
                
                <h1>
                    {this.state.symbol}
                </h1>
                <h1>
                    {this.state.shortname}
                </h1>
                <h1>
                    {this.state.regularMarketPrice}
                </h1>
                    
                
            </div>
        );
    }
}



export default Result;