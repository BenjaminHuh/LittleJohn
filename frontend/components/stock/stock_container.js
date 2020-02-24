import React from 'react';
import { connect } from 'react-redux';
import Stock from './stock';
import { getStock } from '../../actions/stocks_actions'

const mSTP = (state, ownProps) => {
    // debugger
    // let temp = ownProps.match.params.ticker
    // const ticker = Object.keys(state.entities.stock)[0]
    // let ticker = ownProps.match.params.ticker
    // debugger;
    return ({
        currentUser: state.entities.users[state.session.id],
        // stock: state.entities.stock[ticker].info,
        stock: ownProps.history.location.state.stock,
        ticker: ownProps.history.location.state.stock.symbol
    })
}

const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker))
})  

export default connect(mSTP, mDTP)(Stock);