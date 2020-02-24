import {
    RECEIVE_STOCK
} from '../actions/stocks_actions'

const stockReducer = (state = { NASDAQ: { symbol: "NASDAQ", data: [] } }, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_STOCK:
            // const newStock = { [action.stock.symbol]: action.stock, data: action.stock.data }
            // // debugger
            // return Object.assign({}, newStock);

            // debugger;
            Object.keys(action.stock).forEach(id => {
                let newStock = Object.assign({}, nextState[id])
                newStock.info = action.stock[id]
                nextState[id] = newStock
            })
            // debugger
            return nextState;

        default:
            return state;
    }
}

export default stockReducer;