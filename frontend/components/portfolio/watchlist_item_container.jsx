import React from 'react';
import { getPortfolioItem, getWatchlistItem } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import WatchlistItem from './watchlist_item'

const mSTP = (state, ownProps) => {
    return (
        {
            // stock: state.entities.watchlist[ownProps.id],
            stock: ownProps.stock,
            id: ownProps.id
        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getWatchlistItem: stock_id => dispatch(getWatchlistItem(stock_id))
        }
    )
}

export default connect(mSTP, mDTP)(WatchlistItem);