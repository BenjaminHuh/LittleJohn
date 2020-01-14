import React from 'react';
import { connect } from 'react-redux';
import { getStocks, clearStocksErrors } from '../../actions/stocks_actions';
import Search from './search';
import { useHistory } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return ({
    stocks: state.stocks,
    errors: state.errors.stocks,
    history: ownProps.history
    })
}


const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker)),
    getStocks: () => dispatch(getStocks()),
    clearStocksErrors: () => dispatch(clearStocksErrors())
})

export default connect(mSTP, mDTP)(Search);

