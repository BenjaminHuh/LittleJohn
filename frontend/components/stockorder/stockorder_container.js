import React from 'react';
import { connect } from 'react-redux';
import Stockorder from './stockorder';
import { updateUser } from '../../actions/session_actions'
import { getStock, getWatchlist, getPortfolio, getPortfolioItem } from '../../actions/stocks_actions'


const mSTP = (state, ownProps) => {
    debugger
    return ({
        currentUser: ownProps.currentUser,
        stockId: ownProps.stockId,
        num_stocks: ownProps.num_stocks
    })
}

const mDTP = dispatch => {
    return ({
        updateUser: user => dispatch(updateUser(user)),
        getWatchlist: userId => dispatch(getWatchlist(userId)),
        getPortfolio: userId => dispatch(getPortfolio(userId)),
        getPortfolioItem: (user, stockId) => dispatch(getPortfolioItem(user, stockId))
    })
}

export default connect(mSTP, mDTP)(Stockorder);