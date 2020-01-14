import React from 'react';
import { getPortfolioItem, getWatchlistItem } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import PortfolioItem from './portfolio_item'

const mSTP = (state, ownProps) => {
    // debugger
    return (
        {
            watchStock: state.entities.watchlist[ownProps.id],
            stock: state.entities.portfolio[ownProps.id],
            id: ownProps.id
        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getPortfolioItem: stock_id => dispatch(getPortfolioItem(stock_id)),
            getWatchlistItem: stock_id => dispatch(getWatchlistItem(stock_id))
        }
    )
}

export default connect(mSTP, mDTP)(PortfolioItem);