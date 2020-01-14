import React from 'react';
import { connect } from 'react-redux';
import Stock from './stock';
import { getStock } from '../../actions/stocks_actions'

const mSTP = (state, ownProps) => {
    // debugger
    // let temp = ownProps.match.params.ticker;

    const ticker = Object.keys(state.entities.stock)[0]
    // let ticker = ownProps.match.params.ticker
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