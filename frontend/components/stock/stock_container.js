import React from 'react';
import { connect } from 'react-redux';
import Stock from './stock';
import { getStock } from '../../actions/stocks_actions'

const mSTP = (state, ownProps) => {

    // let temp = ownProps.match.params.ticker
    const ticker = Object.keys(state.entities.stock)[0]
    // let ticker = ownProps.match.params.ticker
    let stock;
    if (ownProps.history.location.state === undefined) {
        stock = state.entities.stock[ticker].info;
    } else {
        stock = ownProps.history.location.state.stock;
    }
    // debugger;
    return ({
        currentUser: state.entities.users[state.session.id],
        stock,
        // stock: ownProps.history.location.state.stock,
        // stock,
        // ticker: ownProps.history.location.state.stock.symbol
        ticker
    })
}

const mDTP = dispatch => ({
    getStock: ticker => dispatch(getStock(ticker))
})  

export default connect(mSTP, mDTP)(Stock);