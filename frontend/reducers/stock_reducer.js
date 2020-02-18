import {
    RECEIVE_STOCK
} from '../actions/stocks_actions'

const stockReducer = (state = { NASDAQ: { symbol: "NASDAQ", data: [] } }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCK:
            const newStock = { [action.stock.symbol]: action.stock, data: action.stock.data }
            // debugger
            return Object.assign({}, newStock);

        default:
            return state;
    }
}

export default stockReducer;