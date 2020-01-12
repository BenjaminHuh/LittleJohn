import React from 'react';
import { connect } from 'react-redux';
import { getStocks, clearStocksErrors } from '../../actions/stocks_actions';
import Search from './search';

const mSTP = state => {
    return ({
    stocks: state.stocks,
    errors: state.errors.stocks
    })
}


const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker)),
    getStocks: () => dispatch(getStocks()),
    clearStocskErrors: () => dispatch(clearStocksErrors())
})

export default connect(mSTP, mDTP)(Search);

