import React from 'react';
import { getPortfolio, getPortfolioItem, getWatchlist, getWatchlistItem } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import Portfolio from './portfolio'

const mSTP = state => {
    return (
        {
            portfolio: state.entities.portfolio,
            watchlist: state.entities.watchlist
        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getPortfolio: () => dispatch(getPortfolio()),
            getPortfolioItem: stock_id => dispatch(getPortfolioItem(stock_id)),
            
            getWatchlist: () => dispatch(getWatchlist()),
            getWatchlistItem: stock_id => dispatch(getWatchlistItem(stock_id))
        }
    )
}

export default connect(mSTP, mDTP)(Portfolio);