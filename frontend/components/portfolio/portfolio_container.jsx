import React from 'react';
import { 
    getPortfolio,
    getPortfolioItem, 
    getWatchlist, 
    getWatchlistItem,
    clearPortfolioList,
    clearWatchlist
     } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import Portfolio from './portfolio'

const mSTP = state => {
    // debugger
    return (
        {   
            currentUser: state.entities.users[state.session.id],
            portfolio: state.entities.portfolio,
            watchlist: state.entities.watchlist,
            portfolioLoading: state.status.portfolioLoading,
            watchlistLoading: state.status.watchlistLoading
        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getPortfolio: (user_id) => dispatch(getPortfolio(user_id)),
            getPortfolioItem: stock_id => dispatch(getPortfolioItem(stock_id)),
            
            getWatchlist: (user_id) => dispatch(getWatchlist(user_id)),
            getWatchlistItem: stock_id => dispatch(getWatchlistItem(stock_id)),

            clearWatchlist: () => dispatch(clearWatchlist()),
            clearPortfolioList: () => dispatch(clearPortfolioList())
        }
    )
}

export default connect(mSTP, mDTP)(Portfolio);