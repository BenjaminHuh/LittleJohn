import React from 'react';

class Stock extends React.Component {

    constructor(props) {
        super(props);
    }

    // componenetDidMount() {
    //     this.setState({ ticker: this.props.ticker });
    // }
    
    render() {
        return (
            <div>
                
                <h1>
                    {this.props.stock.longName}
                    <br/>
                    {this.props.stock.regularMarketDayRange}
                </h1>
            </div>
        );
    }
}



export default Stock;