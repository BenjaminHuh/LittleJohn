import React from 'react';
import PortfolioItem from './portfolio_item';

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
                                <PortfolioItem 
                                    item={portfolio[id]} 
                                    key={i}
                                    getPortfolioItem={ this.props.getPortfolioItem }/>
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