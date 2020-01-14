import React from 'react';
import { Link } from 'react-router-dom'

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { symbol: "loading",
            regularMarketPrice: "loading"
        }
    }

    componentDidMount() {
        const { stock, watchStock } = this.props;
        this.props.getPortfolioItem(this.props.id)
            .then(setTimeout(() => {
                this.setState(() => ({
                    symbol: stock.info.symbol,
                    regularMarketPrice: stock.info.regularMarketPrice
                })
            )}, 1500))
    }

    render() {

        return (
            <div>
                <div>
                    {
                        <Link to={`/stocks/${this.state.symbol}`}>
                            {this.state.symbol}
                        </Link>
                    }
                </div>  
                <div>
                    {
                        this.state.regularMarketPrice
                    }
                </div>
                <div>
                    {
                        this.props.stock.num_stocks
                    }
                </div>
                <div>
                    {
                        
                    }
                </div>
                <br/>
            </div>
        )
    }
}

export default PortfolioItem