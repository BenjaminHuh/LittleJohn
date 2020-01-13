import React from 'react';
import { connect } from 'react-redux';
import Stock from './Stock';
import { getStock } from '../../actions/stocks_actions'

const mSTP = (state, ownProps) => {
    let ticker = Object.keys(state.entities.stock)[0];
    return ({
        stock: state.entities.stock[ticker],
        // ticker: Object.keys(state.entities.stock)[0]
        ticker
    })
}

const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker))
})  

export default connect(mSTP, mDTP)(Stock);