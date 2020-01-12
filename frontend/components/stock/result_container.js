import React from 'react';
import { connect } from 'react-redux';
import Result from './result';
import { getStock } from '../../actions/stocks_actions'

const mSTP = (state, ownProps) => {
    return ({
       stock: ownProps.stock
    })
}

const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker))
})  

export default connect(mSTP, null)(Result);