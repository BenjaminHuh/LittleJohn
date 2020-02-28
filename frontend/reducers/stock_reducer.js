import {
    RECEIVE_STOCK
} from '../actions/stocks_actions'

const stockReducer = (state = { NASDAQ: { symbol: "NASDAQ", data: [] } }, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_STOCK:

            Object.keys(action.stock).forEach(id => {
                let newStock = Object.assign({}, nextState[id])
                newStock.info = action.stock[id]
                nextState[id] = newStock
            })
            return nextState;

        case "CLEAR_STOCK":
            return Object.assign({});
            
        default:
            return state;
    }
}

export default stockReducer;