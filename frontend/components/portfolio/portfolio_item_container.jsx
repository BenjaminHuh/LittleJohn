import React from 'react';
import { getPortfolioItem, getWatchlistItem, clearStockItem } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import PortfolioItem from './portfolio_item'

const mSTP = (state, ownProps) => {
    return (
        {   
            stock: state.entities.portfolio[ownProps.id],
            id: ownProps.id
        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getPortfolioItem: stock_id => dispatch(getPortfolioItem(stock_id)),
            clearStockItem: () => clearStockItem()
        }
    )
}

export default connect(mSTP, mDTP)(PortfolioItem);