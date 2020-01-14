import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';

class Portfolio extends React.Component {
    componentDidMount() {
        this.props.getPortfolio();

    }

    render() {
        const { portfolio } = this.props;
        
        return (
            <div>
                Portfolio
                {
                    Object.keys(portfolio).map((id, i) => {
                        
                        return (
                            
                                
                            <div key={i}>
                                <PortfolioItemContainer 
                                    item={portfolio[id]} 
                                    id={id}
                                    key={i}
                                />
                            </div>
                            
                        )
                            
                    })
                }
                Watchlist
                {

                }
            </div>
        );
    }

}

export default Portfolio;