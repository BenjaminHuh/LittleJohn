import React from 'react';
import { Link } from 'react-router-dom'

class WatchlistItem extends React.Component {
    componentDidMount() {
        this.props.getWatchlistItem(this.props.id)
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

export default WatchlistItem