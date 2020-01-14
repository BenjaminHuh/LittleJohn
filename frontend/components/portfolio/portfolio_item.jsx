import React from 'react';

class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getPortfolioItem(this.props.item.stock_id)
    }

    render() {
        debugger
        return (
            <div>
                <div>
                    {
                        this.props.item.stock_id
                    }
                </div>  
                <div>
                    {
                        this.props.item.num_stocks
                    }
                </div>
                <br/>
            </div>
        )
    }
}

export default PortfolioItem