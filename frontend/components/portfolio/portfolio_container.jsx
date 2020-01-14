import React from 'react';
import { getPortfolio, getPortfolioItem } from '../../actions/stocks_actions'
import { connect } from 'react-redux'
import Portfolio from './portfolio'

const mSTP = state => {

    return (
        {
            portfolio: state.entities.portfolio

        }
    )
}

const mDTP = dispatch => {
    return (
        {
            getPortfolio: () => dispatch(getPortfolio()),
            getPortfolioItem: stock_id => dispatch(getPortfolioItem(stock_id))
        }
    )
}

export default connect(mSTP, mDTP)(Portfolio);